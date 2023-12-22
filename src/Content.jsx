import { UsersIndex } from "./UsersIndex";

export function Content() {
  const users = [
    { id: 1, user_name: "watever", user_email: "test@test.com" },
    { id: 2, user_name: "bruce", user_email: "test1@test.com" },
  ];
  return (
    <main>
      <UsersIndex users={users} />
    </main>
  );
}
