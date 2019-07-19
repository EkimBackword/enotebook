import { Injectable } from '@nestjs/common';

const SocksAgent = require('socks5-https-client/lib/Agent');
const passwordHash = require('password-hash');
import Telegraf, {
    ContextMessageUpdate,
    Markup,
} from 'telegraf';

import { TELEGRAM_CONFIG } from '../app.config';
import { UserService } from '../user/user.service';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class TelegramService {
    private bot: Telegraf<ContextMessageUpdate>;
    readonly socksAgent = new SocksAgent({
        socksHost: TELEGRAM_CONFIG.proxy.host,
        socksPort: TELEGRAM_CONFIG.proxy.port,
        socksUsername: TELEGRAM_CONFIG.proxy.login,
        socksPassword: TELEGRAM_CONFIG.proxy.psswd,
    });

    constructor(
        private readonly userService: UserService,
        private readonly logger: LoggerService,
    ) {
        const config = TELEGRAM_CONFIG.needProxy ? { telegram: { agent: this.socksAgent } } : {};
        this.bot = new Telegraf(TELEGRAM_CONFIG.apiToken, config);

        this.commandHandler();
        this.hearsHandler();

        this.bot.catch((err: any) => {
            this.logger.error(err);
        });
        this.bot.startPolling();
    }

    private commandHandler() {
        this.bot.command('signup', (ctx) => { return; });
        this.bot.command('login', (ctx) => { return; });
        this.bot.command('logout', (ctx) => { return; });
        this.bot.command('getinfo', (ctx) => { return; });
        this.bot.command('test', (ctx) => { return; });
    }

    private hearsHandler() {
        this.bot.hears(/(.*)расписание(.*)/i, (ctx) => { return; });
        this.bot.hears(/(.*)[З,з]адани[е,я,й](.*)/i, (ctx) => { return; });
    }
}
