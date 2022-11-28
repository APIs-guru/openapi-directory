import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhooksQueryParams extends SpeakeasyBase {
    teamId?: string;
}
export declare class GetWebhooksRequest extends SpeakeasyBase {
    queryParams: GetWebhooksQueryParams;
}
export declare class GetWebhooksResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    errorResponseContent?: shared.ErrorResponseContent;
    statusCode: number;
    webhookInfos?: shared.WebhookInfo[];
}
