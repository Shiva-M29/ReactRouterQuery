import { useQuery } from "@tanstack/react-query";
import { Container,Title,Message,AlbumGrid,AlbumCard } from "./Albums.styled";

export default function Albums() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["albums"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/albums").then(res => res.json()),
  });

  if (isLoading) return <Message>Loading...</Message>;
  if (isError) return <Message>Error loading albums</Message>;

  return (
    <Container>
      <Title>Albums</Title>
      <AlbumGrid>
        {data && data.slice(0, 15).map(album => (
          <AlbumCard key={album.id}>
            <p style={{textAlign:"left"}}><b style={{color:"teal"}}>UserId:</b> {album.userId}</p>
            <p style={{textAlign:"left"}}><b style={{color:"teal"}}>Title:</b> {album.title.slice(0,15)}</p>
          </AlbumCard>
        ))}
      </AlbumGrid>
    </Container>
  );
}
