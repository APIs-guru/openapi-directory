import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateWebhookV1PathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class UpdateWebhookV1Request extends SpeakeasyBase {
    pathParams: UpdateWebhookV1PathParams;
    request?: shared.UpdateWebhookRequest;
}
export declare class UpdateWebhookV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
