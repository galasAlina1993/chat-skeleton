export class User {
  avatarUrl: string;
  birthDate: Date;
  email: string;
  firstName: string;
  id: string;
  lastName: string;

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
