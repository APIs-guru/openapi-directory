import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetWebhooksQueryParams extends SpeakeasyBase {
    teamId?: string;
}
export declare class GetWebhooksRequest extends SpeakeasyBase {
    queryParams: GetWebhooksQueryParams;
}
export declare class GetWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhooks?: any[];
}
