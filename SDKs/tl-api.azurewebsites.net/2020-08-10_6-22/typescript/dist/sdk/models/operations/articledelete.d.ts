import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleDeleteQueryParams extends SpeakeasyBase {
    articleId?: number;
}
export declare class ArticleDeleteRequest extends SpeakeasyBase {
    queryParams: ArticleDeleteQueryParams;
}
export declare class ArticleDeleteResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    defaultResponseDtoOfInteger?: shared.DefaultResponseDtoOfInteger;
    statusCode: number;
}
