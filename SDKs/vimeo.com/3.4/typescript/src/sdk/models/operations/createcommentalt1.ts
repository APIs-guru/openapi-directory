import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateCommentAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CreateCommentAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=text" })
  text: string;
}


export class CreateCommentAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateCommentAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateCommentAlt1PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.comment+json" })
  request: CreateCommentAlt1RequestBody;

  @SpeakeasyMetadata()
  security: CreateCommentAlt1Security;
}


export class CreateCommentAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  comment?: shared.Comment;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
