import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EditCommentPathParams extends SpeakeasyBase {
    commentId: number;
    videoId: number;
}
export declare class EditCommentRequestBody extends SpeakeasyBase {
    text: string;
}
export declare class EditCommentSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class EditCommentRequest extends SpeakeasyBase {
    pathParams: EditCommentPathParams;
    request: EditCommentRequestBody;
    security: EditCommentSecurity;
}
export declare class EditCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    comment?: shared.Comment;
    error?: shared.Error;
}
