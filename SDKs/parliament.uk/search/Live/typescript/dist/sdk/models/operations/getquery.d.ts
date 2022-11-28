import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetQueryQueryParams extends SpeakeasyBase {
    count?: number;
    inUrlPrefixes?: string;
    q: string;
    start?: number;
    subdomains?: string;
}
export declare class GetQueryRequest extends SpeakeasyBase {
    queryParams: GetQueryQueryParams;
}
export declare class GetQueryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
