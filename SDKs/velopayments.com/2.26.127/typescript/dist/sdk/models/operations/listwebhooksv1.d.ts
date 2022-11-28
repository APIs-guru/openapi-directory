import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWebhooksV1QueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    payorId: string;
}
export declare class ListWebhooksV1Request extends SpeakeasyBase {
    queryParams: ListWebhooksV1QueryParams;
}
export declare class ListWebhooksV1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhooksResponse?: shared.WebhooksResponse;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
