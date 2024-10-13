import { UserUsecaseInterface } from "../interfaces/user_usecase_interface";

export class UserService {
    private userUsecase: UserUsecaseInterface

    constructor(userUsecase: UserUsecaseInterface) {
        this.userUsecase = userUsecase;
    }

    UserCreateService() {
        this.userUsecase.UserCreateUsecase();
    }
}