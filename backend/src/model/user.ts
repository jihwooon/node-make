export class User {
    private email: string;
    private password: string;

    constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
    }

    static async create({ email, password }: { email: string, password: string }) {
        return new User(email, password);
    }

    getEmail() {
        return this.email;
    }

    getPassword() {
        return this.password;
    }
}