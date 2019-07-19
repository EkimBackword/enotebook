import { Injectable } from '@nestjs/common';
import { IUserDto } from 'src/user/models';
import { ILoggerOption } from './models';
import fs = require('fs');
const pathError = './errors.log';
const pathLog = './events.log';

@Injectable()
export class LoggerService {

    constructor() {
        LoggerService.checkFile(pathError);
        LoggerService.checkFile(pathLog);
    }

    error(message: string) {
        fs.appendFileSync(pathError,
            `${new Date().toLocaleString()} --- ERROR: ${message}`,
        );
    }

    log(option: ILoggerOption) {
        fs.appendFileSync(pathLog,
            `(${new Date().toLocaleString()}) --- TYPE: ${option.type} / USER: ${option.user} / MESSAGE: ${option.message}`,
        );
    }

    private static checkFile(path) {
        if (fs.existsSync(path)) {
            const fileStat = fs.statSync(path);
            const fileSizeInMegabytes = fileStat.size / 1000000.0;
            if (fileSizeInMegabytes > 100) {
                fs.readFile('DATA', 'utf8', (err, contents) => {
                    if (!err) {
                        const lines = contents.toString().split('\n');
                        const txt = lines.splice(lines.length - 100, 100).join('\n');
                        fs.writeFileSync(path, txt);
                    }
                });
            }
        } else {
            fs.writeFileSync(path, '');
        }
    }
}
