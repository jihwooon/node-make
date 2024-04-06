import { doQuery } from '../utils/mysql';
import { User } from '../model/user';

export const save = async (user: User): Promise<boolean> => {
    try {
        await doQuery((connection) =>
            connection.execute(
                `INSERT INTO users (email,  encrypted_password) VALUES (?, ?)`,
                [user.getEmail(), user.getPassword()],
            ),
        );
        return true;
    } catch (error: any) {
        if (/Duplicate entry/.test(error.message)) {
            return false;
        }
        throw error;
    }
};
