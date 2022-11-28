import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetUsersIdsMergesPathParams extends SpeakeasyBase {
    ids: string;
}
export declare class GetUsersIdsMergesQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
}
export declare class GetUsersIdsMergesRequest extends SpeakeasyBase {
    pathParams: GetUsersIdsMergesPathParams;
    queryParams: GetUsersIdsMergesQueryParams;
}
export declare class GetUsersIdsMergesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
