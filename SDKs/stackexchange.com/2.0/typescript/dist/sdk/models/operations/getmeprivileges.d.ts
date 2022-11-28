import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMePrivilegesQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetMePrivilegesRequest extends SpeakeasyBase {
    queryParams: GetMePrivilegesQueryParams;
}
export declare class GetMePrivilegesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
