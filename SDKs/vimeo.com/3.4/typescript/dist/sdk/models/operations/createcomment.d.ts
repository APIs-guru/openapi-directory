import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCommentPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class CreateCommentRequestBody extends SpeakeasyBase {
    text: string;
}
export declare class CreateCommentSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateCommentRequest extends SpeakeasyBase {
    pathParams: CreateCommentPathParams;
    request: CreateCommentRequestBody;
    security: CreateCommentSecurity;
}
export declare class CreateCommentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    comment?: shared.Comment;
    error?: shared.Error;
}
