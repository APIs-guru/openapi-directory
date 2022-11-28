import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsReputationPathParams extends SpeakeasyBase {
    ids: string;
}
export declare class GetUsersIdsReputationQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    fromdate?: number;
    page?: number;
    pagesize?: number;
    site: string;
    todate?: number;
}
export declare class GetUsersIdsReputationRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsReputationPathParams;
    queryParams: GetUsersIdsReputationQueryParams;
}
export declare class GetUsersIdsReputationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
