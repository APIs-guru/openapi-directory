import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCommentReplyPathParams extends SpeakeasyBase {
    commentId: number;
    videoId: number;
}
export declare class CreateCommentReplyRequestBody extends SpeakeasyBase {
    text: string;
}
export declare class CreateCommentReplySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateCommentReplyRequest extends SpeakeasyBase {
    pathParams: CreateCommentReplyPathParams;
    request: CreateCommentReplyRequestBody;
    security: CreateCommentReplySecurity;
}
export declare class CreateCommentReplyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    comment?: shared.Comment;
    error?: shared.Error;
}
