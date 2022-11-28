import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetArticlesQueryParams extends SpeakeasyBase {
    excludeFeatured?: number;
    offset?: number;
    page?: number;
    perPage?: number;
    query?: string;
}
export declare class GetArticlesRequest extends SpeakeasyBase {
    queryParams: GetArticlesQueryParams;
}
export declare class GetArticlesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
