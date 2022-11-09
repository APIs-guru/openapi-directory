import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostDpsMessagePathParams extends SpeakeasyBase {
    employerId: string;
}
export declare class PostDpsMessageHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class PostDpsMessageRequest extends SpeakeasyBase {
    pathParams: PostDpsMessagePathParams;
    headers: PostDpsMessageHeaders;
}
export declare class PostDpsMessageResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    link?: shared.Link;
    statusCode: number;
}
