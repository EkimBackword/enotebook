import { Injectable, NotFoundException } from '@nestjs/common';
import { IUserDto } from './models';
import { of, EMPTY } from 'rxjs';

@Injectable()
export class UserService {

    private readonly users: IUserDto[] = [];

    create(user: IUserDto) {
        user.id = this.uuid();
        this.users.push(user);
        return of(user.id);
    }

    findAll() {
        return of(this.users);
    }

    find(id: string) {
        return of(this.users.find(u => u.id === id));
    }

    update(id: string, dto: IUserDto) {
        const user = this.users.find(u => u.id === id);
        if (user) {
            const index = this.users.indexOf(user);
            this.users[index] = Object.assign({}, user, dto);
            return EMPTY;
        }
        throw new NotFoundException('Пользователь не найден');
    }

    delete(id: string) {
        const user = this.users.find(u => u.id === id);
        if (user) {
            const index = this.users.indexOf(user);
            this.users.splice(index, 1);
            return EMPTY;
        }
        throw new NotFoundException('Пользователь не найден');
    }

    protected uuid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
            ( c, r ) => ( 'x' === c ? ( r = Math.random() * 16 | 0) : ( r & 0x3 | 0x8 )).toString(16)
        );
    }

}
