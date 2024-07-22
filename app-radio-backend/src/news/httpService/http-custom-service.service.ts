import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosPromise } from 'axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class HttpCustomServiceService {
    constructor(private readonly httpService: HttpService){}

    async connectionApi(metodo: 'get' | 'post' | 'put' | 'delete', url: string, data?: object, options?: object): Promise<AxiosPromise>{
        try {
            const request = await lastValueFrom(this.httpService[metodo](url, data, options));
            return request;
        } catch (error) {
            throw error
        }
    }
}
