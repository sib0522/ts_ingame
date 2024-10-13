import { UserRepositoryInterface } from "../interfaces/user_repository_interface";

export class UserRepository implements UserRepositoryInterface {
    createUser(): boolean {
        return false;
    }
}
