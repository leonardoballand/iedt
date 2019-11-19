import React from "react";

const styles = {
  container: {
    marginTop: 12,
    marginBottom: 12
  },
  innerWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none"
  },
  avatar: {
    objectFit: "cover",
    width: 45,
    marginRight: 12
  },
  name: {
    fontSize: 16,
    lineHeight: "calc((16px * 140) / 100)",
    color: "grey",
    fontWeight: "400"
  }
};

export default function UserCard({ user }) {
  return (
    <li style={styles.container}>
      <a
        href={user.url}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.innerWrapper}
      >
        <img
          src={user.avatar_url}
          style={styles.avatar}
          alt={`${user.login} avatar`}
        />

        <h1 style={styles.name}>{user.login}</h1>
      </a>
    </li>
  );
}
