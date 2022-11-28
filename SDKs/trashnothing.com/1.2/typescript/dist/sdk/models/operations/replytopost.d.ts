import { SpeakeasyBase } from "../../../internal/utils";
export declare class ReplyToPostPathParams extends SpeakeasyBase {
    postId: string;
}
export declare class ReplyToPostRequestBody extends SpeakeasyBase {
    message: string;
    photoIds?: string;
}
export declare class ReplyToPostRequest extends SpeakeasyBase {
    pathParams: ReplyToPostPathParams;
    request: ReplyToPostRequestBody;
}
export declare class ReplyToPostResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
