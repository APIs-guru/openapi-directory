import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommentPathParams extends SpeakeasyBase {
    commentId: number;
    videoId: number;
}
export declare class GetCommentRequest extends SpeakeasyBase {
    pathParams: GetCommentPathParams;
}
export declare class GetCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    comment?: shared.Comment;
    legacyError?: shared.LegacyError;
}
