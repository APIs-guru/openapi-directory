import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPostPathParams extends SpeakeasyBase {
    postId: string;
}
export declare class GetPostSecurity extends SpeakeasyBase {
    oauth2Implicit?: shared.SchemeOauth2Implicit;
    oauth2Code?: shared.SchemeOauth2Code;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetPostRequest extends SpeakeasyBase {
    pathParams: GetPostPathParams;
    security: GetPostSecurity;
}
export declare class GetPostResponse extends SpeakeasyBase {
    contentType: string;
    post?: shared.Post;
    statusCode: number;
}
