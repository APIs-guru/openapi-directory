import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCommentPathParams extends SpeakeasyBase {
    commentId: number;
    videoId: number;
}
export declare class DeleteCommentSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteCommentRequest extends SpeakeasyBase {
    pathParams: DeleteCommentPathParams;
    security: DeleteCommentSecurity;
}
export declare class DeleteCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: shared.Error;
    legacyError?: shared.LegacyError;
}
