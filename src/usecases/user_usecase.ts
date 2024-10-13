import { UserUsecaseInterface } from "../interfaces/user_usecase_interface";
import { UserRepositoryInterface } from "../interfaces/user_repository_interface";

export class UserUsecase implements UserUsecaseInterface {
    private repo: UserRepositoryInterface;

    constructor(userRepo: UserRepositoryInterface) {
        this.repo = userRepo;
    }

    UserCreateUsecase(): boolean {
        const isOk = this.repo.createUser();
        return isOk;
    }
}
