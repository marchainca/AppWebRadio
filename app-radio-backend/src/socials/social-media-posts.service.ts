import { Injectable, Logger } from '@nestjs/common';
import { FcbkConstants } from 'src/auth/constantes';
import { HttpCustomServiceService } from 'src/news/httpService/http-custom-service.service'

@Injectable()
export class SocialMediaPostsService {
    private readonly logger = new Logger(SocialMediaPostsService.name);

    constructor(private readonly httpService: HttpCustomServiceService ){}

    /**
   * Publica un mensaje en la página de Facebook
   * @param message - El mensaje que se va a publicar
   * @returns - La respuesta de la API de Facebook
   */
    async publishPostFcbk(data: object): Promise<any>{
        try {
            const pageAccessToken = FcbkConstants.FACEBOOK_PAGE_ACCESS_TOKEN;
            const pageId = '100063713905670';
            let url = FcbkConstants.URL;
            url = url.replace('pageId', pageId);
            const metodo = 'post';
            const options = {
                params: {
                    access_token: pageAccessToken
                }
            }
            const response = await this.httpService.connectionApi(metodo, url, data, options);
            this.logger.log(`Post published: ${response.data.id}`);
        } catch (error) {
            this.logger.log(`Error Publishing post `, error)
            throw error
        }
    }
}
