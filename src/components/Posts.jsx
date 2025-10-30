
import { useState,useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import {Container,Title,Message,CommentCard,CommentsContainer,PostGrid,ToggleButton,PostCard,UserInfo} from "./Posts.styled"

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => {
      if (!res.ok) throw new Error("Network error while fetching posts");
      return res.json();
    });
}


function fetchCommentsByPost(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then((res) => {
      if (!res.ok) throw new Error("Network error while fetching comments");
      return res.json();
    });
}

export default function Posts() {
  const [selectedPostId, setSelectedPostId] = useState(null);
  const {
    data: posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

 
  const {
    data: comments,
    isLoading: isCommentsLoading,
    isError: isCommentsError,
    refetch: refetchComments,
  } = useQuery({
    queryKey: ["comments", selectedPostId],
    queryFn: () => fetchCommentsByPost(selectedPostId),
    enabled: selectedPostId !== null
  });

  const handleShowComments = (postId) => {
  setSelectedPostId(selectedPostId === postId ? null : postId);
};


  if (isPostsLoading) return <Message>Loading posts...</Message>;
  if (isPostsError) return <Message>Error loading posts.</Message>;

  return (
    <Container>
      <div style={{display:"flex"}}>
      <Title>Posts</Title>
            <img src="https://www.valueleaf.com/blog/wp-content/uploads/2024/09/social-media-posts.webp"
        style={{
          width: "30%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "14px",
          marginBottom: "20px",
          marginLeft:"auto",
          display:"block",
    
          boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
        }}
      />
      </div>

   <PostGrid>
      {posts &&posts.slice(0, 10).map((post) => (
        <PostCard>
          
          <UserInfo>
            User ID: {post.userId}
          </UserInfo>

         
          <h3>Title: {post.title.slice(0,10)}</h3>
          <p>Body: {post.body.slice(0,60)}</p>

          
          <ToggleButton onClick={() => handleShowComments(post.id)}>
            {selectedPostId === post.id ? "Hide Comments" : "Show Comments"}
          </ToggleButton>

          {selectedPostId === post.id && (
            <CommentsContainer>
              {isCommentsLoading && <Message>Loading comments...</Message>}
              {isCommentsError && <Message>Error loading comments.</Message>}

              {comments && 
                comments.slice(0, 2).map((c) => (
                  <CommentCard>
                    <p>
                      <strong>Email: </strong>({c.email})
                    </p>
                    <p > <strong>comment: </strong>{c.body.slice(0, 20)}</p>
                  </CommentCard>
                ))}
            </CommentsContainer>
          )}
        </PostCard>
      ))}
      </PostGrid>
    </Container>
  );
}
