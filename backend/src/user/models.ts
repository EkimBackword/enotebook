export interface IUserDto {
    /** Идентификатор */
    id?: string;
    /** Логин */
    readonly login?: string;
    /** Пароль */
    readonly password?: string;
    /** Роль */
    readonly role?: string;
    /** Фамилия */
    readonly family?: string;
    /** Имя */
    readonly name?: string;
    /** Отчество */
    readonly patronymic?: string;
}

export interface IListQuery {
    /** Строка поиска по ФИО */
    readonly term: string;
    /** Роль */
    readonly role: string;
}