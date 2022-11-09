import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class GetCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCommentPathParams;
}


export class GetCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  comment?: shared.Comment;

  @Metadata()
  legacyError?: shared.LegacyError;
}
