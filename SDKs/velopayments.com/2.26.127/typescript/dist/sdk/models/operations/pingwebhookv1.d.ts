import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PingWebhookV1PathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class PingWebhookV1Request extends SpeakeasyBase {
    pathParams: PingWebhookV1PathParams;
}
export declare class PingWebhookV1Response extends SpeakeasyBase {
    contentType: string;
    pingResponse?: shared.PingResponse;
    statusCode: number;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
