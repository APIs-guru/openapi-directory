import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleSearchQueryParams extends SpeakeasyBase {
    activeStatus?: number;
    gymId?: number;
    limit?: number;
    offset?: number;
    orderBy?: string;
    searchText?: string;
    type?: string;
}
export declare class ArticleSearchRequest extends SpeakeasyBase {
    queryParams: ArticleSearchQueryParams;
}
export declare class ArticleSearchResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDtoOfListOfArticleSearchDto?: shared.DefaultResponseDtoOfListOfArticleSearchDto;
    statusCode: number;
}
