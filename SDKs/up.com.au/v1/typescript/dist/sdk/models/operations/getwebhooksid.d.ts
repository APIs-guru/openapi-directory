import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhooksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetWebhooksIdRequest extends SpeakeasyBase {
    pathParams: GetWebhooksIdPathParams;
}
export declare class GetWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    getWebhookResponse?: shared.GetWebhookResponse;
    statusCode: number;
}
