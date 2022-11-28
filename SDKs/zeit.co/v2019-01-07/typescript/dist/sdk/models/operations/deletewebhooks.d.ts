import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteWebhooksQueryParams extends SpeakeasyBase {
    teamId?: string;
}
export declare class DeleteWebhooksRequest extends SpeakeasyBase {
    queryParams: DeleteWebhooksQueryParams;
}
export declare class DeleteWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
