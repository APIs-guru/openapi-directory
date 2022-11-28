import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeWritePermissionsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetMeWritePermissionsRequest extends SpeakeasyBase {
    queryParams: GetMeWritePermissionsQueryParams;
}
export declare class GetMeWritePermissionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
