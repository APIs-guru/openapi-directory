import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdReputationHistoryFullPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetUsersIdReputationHistoryFullQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetUsersIdReputationHistoryFullRequest extends SpeakeasyBase {
    pathParams: GetUsersIdReputationHistoryFullPathParams;
    queryParams: GetUsersIdReputationHistoryFullQueryParams;
}
export declare class GetUsersIdReputationHistoryFullResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
