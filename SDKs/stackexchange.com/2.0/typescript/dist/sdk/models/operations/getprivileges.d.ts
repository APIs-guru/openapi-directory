import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPrivilegesQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
    site: string;
}
export declare class GetPrivilegesRequest extends SpeakeasyBase {
    queryParams: GetPrivilegesQueryParams;
}
export declare class GetPrivilegesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
