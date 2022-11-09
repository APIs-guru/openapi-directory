import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCommentReplyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CreateCommentReplyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: string;
}


export class CreateCommentReplySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateCommentReplyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateCommentReplyPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.comment+json" })
  request: CreateCommentReplyRequestBody;

  @Metadata()
  security: CreateCommentReplySecurity;
}


export class CreateCommentReplyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  comment?: shared.Comment;

  @Metadata()
  error?: shared.Error;
}
