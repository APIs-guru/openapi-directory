import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleGetPathParams extends SpeakeasyBase {
    articleId: number;
}
export declare class ArticleGetRequest extends SpeakeasyBase {
    pathParams: ArticleGetPathParams;
}
export declare class ArticleGetResponse extends SpeakeasyBase {
    apiResponse?: shared.ApiResponse;
    contentType: string;
    defaultResponseDtoOfArticleDto?: shared.DefaultResponseDtoOfArticleDto;
    statusCode: number;
}
