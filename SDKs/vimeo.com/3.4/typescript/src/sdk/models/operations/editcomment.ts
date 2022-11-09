import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class EditCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: string;
}


export class EditCommentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditCommentPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.comment+json" })
  request: EditCommentRequestBody;

  @Metadata()
  security: EditCommentSecurity;
}


export class EditCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  comment?: shared.Comment;

  @Metadata()
  error?: shared.Error;
}
