import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCommentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CreateCommentRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: string;
}


export class CreateCommentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateCommentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateCommentPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.comment+json" })
  request: CreateCommentRequestBody;

  @Metadata()
  security: CreateCommentSecurity;
}


export class CreateCommentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  comment?: shared.Comment;

  @Metadata()
  error?: shared.Error;
}
