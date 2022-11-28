import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsAssociatedPathParams extends SpeakeasyBase {
    ids: string;
}
export declare class GetUsersIdsAssociatedQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
}
export declare class GetUsersIdsAssociatedRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsAssociatedPathParams;
    queryParams: GetUsersIdsAssociatedQueryParams;
}
export declare class GetUsersIdsAssociatedResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
