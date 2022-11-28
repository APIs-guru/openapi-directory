import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUserHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostUserRequest extends SpeakeasyBase {
    headers: PostUserHeaders;
}
export declare class PostUserResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
