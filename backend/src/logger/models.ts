import { IUserDto } from '../user/models';

export interface ILoggerOption {
    user: IUserDto;
    message: string;
    type: 'create' | 'updete' | 'delete' | 'any';
}
