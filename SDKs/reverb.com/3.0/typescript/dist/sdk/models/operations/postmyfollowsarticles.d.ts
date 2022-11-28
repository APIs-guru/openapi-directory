import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMyFollowsArticlesRequestBody extends SpeakeasyBase {
    categoryUuids: string;
}
export declare class PostMyFollowsArticlesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class PostMyFollowsArticlesRequest extends SpeakeasyBase {
    request?: PostMyFollowsArticlesRequestBody;
    security: PostMyFollowsArticlesSecurity;
}
export declare class PostMyFollowsArticlesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
