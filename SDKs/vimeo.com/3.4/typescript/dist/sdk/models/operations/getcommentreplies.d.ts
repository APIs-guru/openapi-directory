import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommentRepliesPathParams extends SpeakeasyBase {
    commentId: number;
    videoId: number;
}
export declare class GetCommentRepliesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetCommentRepliesRequest extends SpeakeasyBase {
    pathParams: GetCommentRepliesPathParams;
    queryParams: GetCommentRepliesQueryParams;
}
export declare class GetCommentRepliesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    comments?: shared.Comment[];
    legacyError?: shared.LegacyError;
}
