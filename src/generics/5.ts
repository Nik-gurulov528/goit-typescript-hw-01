export enum UserRole {
  admin = 'admin',
  editor = 'editor',
  guest = 'guest',
}

// Замініть наступний код на версію за допомогою Record

type RoleDescription = Record<UserRole, string>;

// const RoleDescription = {
//   admin: 'Admin User',
//   editor: 'Editor User',
//   guest: 'Guest User',
// };
