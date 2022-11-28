import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleGetAddonsQueryParams extends SpeakeasyBase {
    gymIds?: string;
    limit?: number;
    offset?: number;
    searchText?: string;
    type?: string;
}
export declare class ArticleGetAddonsRequest extends SpeakeasyBase {
    queryParams: ArticleGetAddonsQueryParams;
}
export declare class ArticleGetAddonsResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDtoOfListOfArticleSearchDto?: shared.DefaultResponseDtoOfListOfArticleSearchDto;
    statusCode: number;
}
