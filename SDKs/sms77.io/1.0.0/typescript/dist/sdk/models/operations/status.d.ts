import { SpeakeasyBase } from "../../../internal/utils";
export declare class StatusQueryParams extends SpeakeasyBase {
    msgId: string;
}
export declare class StatusRequest extends SpeakeasyBase {
    queryParams: StatusQueryParams;
}
export declare class StatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    status200TextPlainString?: string;
}
