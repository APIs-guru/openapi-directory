import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetErrorsQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    page?: number;
    pagesize?: number;
}
export declare class GetErrorsRequest extends SpeakeasyBase {
    queryParams: GetErrorsQueryParams;
}
export declare class GetErrorsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
