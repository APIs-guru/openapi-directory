import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArticleUpdateStatusQueryParams extends SpeakeasyBase {
    articleId?: number;
    status?: number;
    userName?: string;
}
export declare class ArticleUpdateStatusRequest extends SpeakeasyBase {
    queryParams: ArticleUpdateStatusQueryParams;
}
export declare class ArticleUpdateStatusResponse extends SpeakeasyBase {
    apiException?: shared.ApiException;
    contentType: string;
    defaultResponseDtoOfInteger?: shared.DefaultResponseDtoOfInteger;
    statusCode: number;
}
