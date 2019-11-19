import React from "react";

import UserCard from "../UserCard";

const styles = {
  container: {
    listStyleType: "none",
    padding: 0,
    margin: 0
  }
};

export default function UsersList({ users }) {
  return (
    <ul style={styles.container}>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </ul>
  );
}
