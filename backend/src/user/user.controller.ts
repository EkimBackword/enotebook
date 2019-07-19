import {
    Controller,
    Get, Post, Patch, Delete,
    Param, Body, Query,
    HttpCode,
} from '@nestjs/common';
import { of, Observable } from 'rxjs';
import { IUserDto, IListQuery } from './models';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(
        private readonly userService: UserService,
    ) {}

    @Post()
    @HttpCode(204)
    create(@Body() dto: IUserDto) {
        const id = this.userService.create(dto);
        return id;
    }

    @Get()
    find(@Query() query: IListQuery) {
        console.log(query);
        return this.userService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        console.log(id);
        return this.userService.find(id);
    }

    @Patch(':id')
    @HttpCode(204)
    update(@Param('id') id: string, @Body() dto: IUserDto) {
        console.log(id);
        return this.userService.update(id, dto);
    }

    @Delete(':id')
    @HttpCode(204)
    delete(@Param('id') id: string) {
        console.log(id);
        return this.userService.delete(id);
    }

}
