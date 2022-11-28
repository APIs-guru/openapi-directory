import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateCommentAlt1PathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare class CreateCommentAlt1RequestBody extends SpeakeasyBase {
    text: string;
}
export declare class CreateCommentAlt1Security extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateCommentAlt1Request extends SpeakeasyBase {
    pathParams: CreateCommentAlt1PathParams;
    request: CreateCommentAlt1RequestBody;
    security: CreateCommentAlt1Security;
}
export declare class CreateCommentAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    comment?: shared.Comment;
    error?: shared.Error;
}
