import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCommentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CreateCommentRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}


export class CreateCommentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateCommentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateCommentPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.comment+json" })
  request: CreateCommentRequestBody;

  @SpeakeasyMetadata()
  security: CreateCommentSecurity;
}


export class CreateCommentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  comment?: shared.Comment;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
