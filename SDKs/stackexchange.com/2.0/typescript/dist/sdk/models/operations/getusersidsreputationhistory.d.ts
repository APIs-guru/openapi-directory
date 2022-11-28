import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsReputationHistoryPathParams extends SpeakeasyBase {
    ids: string;
}
export declare class GetUsersIdsReputationHistoryQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetUsersIdsReputationHistoryRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsReputationHistoryPathParams;
    queryParams: GetUsersIdsReputationHistoryQueryParams;
}
export declare class GetUsersIdsReputationHistoryResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
