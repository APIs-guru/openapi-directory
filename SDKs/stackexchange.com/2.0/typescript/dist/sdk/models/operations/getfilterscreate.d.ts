import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFiltersCreateQueryParams extends SpeakeasyBase {
    base?: string;
    exclude?: string;
    include?: string;
    unsafe?: boolean;
}
export declare class GetFiltersCreateRequest extends SpeakeasyBase {
    queryParams: GetFiltersCreateQueryParams;
}
export declare class GetFiltersCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
