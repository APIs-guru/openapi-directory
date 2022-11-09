import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCommentAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CreateCommentAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=text" })
  text: string;
}


export class CreateCommentAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateCommentAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateCommentAlt1PathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.comment+json" })
  request: CreateCommentAlt1RequestBody;

  @Metadata()
  security: CreateCommentAlt1Security;
}


export class CreateCommentAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  comment?: shared.Comment;

  @Metadata()
  error?: shared.Error;
}
