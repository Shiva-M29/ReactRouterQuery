import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Container, Title, SearchBar, Input, Button, Message, Grid, Card } from "./Users.styled";

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      if (!res.ok) throw new Error("Network error");
      return res.json();
    });
}

function fetchUserById(userId) {
  return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then((res) => {
      if (!res.ok) throw new Error("User not found");
      return res.json();
    });
}

export default function Users() {
  const [userId, setUserId] = useState("");
  const [showSingle, setShowSingle] = useState(false);
  const {
    data: users,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  const {
    data: singleUser,
    isLoading: isUserLoading,
    isError: isUserError,
    refetch: refetchUser,
  } = useQuery({
    queryKey: ["user", userId],
    queryFn: () => fetchUserById(userId),
    enabled: false,
  });

  const handleFetchUser = () => {
    if (userId.trim() === "") return;
    refetchUser();
    setShowSingle(true);
  };

  const handleClear = () => {
    setUserId("");
    setShowSingle(false);
  };

  return (
    <Container>
      <Title>Users</Title>
      <SearchBar>
        <Input
          type="number"
          placeholder="Enter user ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      <Button onClick={handleFetchUser}>Search</Button>
      {showSingle && <Button onClick={handleClear}>Show All</Button>}
      </SearchBar>

      <hr />

      {showSingle ? (
        <>
          {isUserLoading && <Message>Loading user details...</Message>}
          {isUserError && <Message>User not found.</Message>}
          {singleUser && (
            <Card>
              <h4>{singleUser.name}</h4>
              <p><b>Email:</b> {singleUser.email}</p>
              <p><b>Phone:</b> {singleUser.phone}</p>
              <p><b>City:</b> {singleUser.address.city}</p>
            </Card>
          )}
        </>
      ) : (
        <>
          {isUsersLoading && <Message>Loading all users...</Message>}
          {isUsersError && <Message>Error loading users.</Message>}
          {users && (
            <Grid>
              {users.map((u) => (
                <Card>
              <h4 style={{color: "teal"}}>{u.name}</h4>
              <p><b>Email:</b> {u.email}</p>
              <p><b>Phone:</b> {u.phone}</p>
              <p><b>City:</b> {u.address.city}</p>
            </Card>
          ))}
            </Grid>
          )}
        </>
      )}
    </Container>
  );
}
