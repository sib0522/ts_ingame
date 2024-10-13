import express, { Request, Response } from 'express';

import { UserService } from './src/services/user_service';
import { UserUsecase } from './src/usecases/user_usecase';
import { UserRepository } from './src/infrastructure/user_repository';
import { DB } from './src/database/db';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('hello world');
});

router.get('/page', (req, res) => {
    res.send('About page');
});

// db接続とインスタンス生成
const db = new DB();

const userRepository = new UserRepository(db);
const userUsecase = new UserUsecase(userRepository);
const userService = new UserService(userUsecase);

router.post('/user/create', (req, res) => {
    userService.UserCreateService();
});


module.exports = router;
