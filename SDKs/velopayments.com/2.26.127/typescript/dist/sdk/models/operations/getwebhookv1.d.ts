import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhookV1PathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class GetWebhookV1Request extends SpeakeasyBase {
    pathParams: GetWebhookV1PathParams;
}
export declare class GetWebhookV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhookResponse?: shared.WebhookResponse;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
