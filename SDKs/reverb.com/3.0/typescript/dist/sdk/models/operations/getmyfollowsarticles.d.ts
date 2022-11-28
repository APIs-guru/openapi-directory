import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMyFollowsArticlesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class GetMyFollowsArticlesRequest extends SpeakeasyBase {
    security: GetMyFollowsArticlesSecurity;
}
export declare class GetMyFollowsArticlesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
