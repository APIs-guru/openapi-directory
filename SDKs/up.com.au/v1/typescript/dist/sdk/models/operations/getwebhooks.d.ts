import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhooksQueryParams extends SpeakeasyBase {
    pageSize?: number;
}
export declare class GetWebhooksRequest extends SpeakeasyBase {
    queryParams: GetWebhooksQueryParams;
}
export declare class GetWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    listWebhooksResponse?: shared.ListWebhooksResponse;
    statusCode: number;
}
