import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetHistoryQueryParams extends SpeakeasyBase {
    applicationId?: string;
    from?: number;
    groupId?: string;
    serviceId?: string;
    to?: number;
}
export declare class GetHistoryRequest extends SpeakeasyBase {
    queryParams: GetHistoryQueryParams;
}
export declare class GetHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
