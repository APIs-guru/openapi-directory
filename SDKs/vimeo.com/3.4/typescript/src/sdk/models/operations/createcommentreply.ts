import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCommentReplyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=comment_id" })
  commentId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CreateCommentReplyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}


export class CreateCommentReplySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateCommentReplyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateCommentReplyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.comment+json" })
  request: CreateCommentReplyRequestBody;

  @SpeakeasyMetadata()
  security: CreateCommentReplySecurity;
}


export class CreateCommentReplyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  comment?: shared.Comment;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
