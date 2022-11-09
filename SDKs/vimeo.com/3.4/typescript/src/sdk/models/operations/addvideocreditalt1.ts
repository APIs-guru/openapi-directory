import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVideoCreditAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class AddVideoCreditAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=role" })
  role: string;

  @Metadata({ data: "json, name=user_uri" })
  userUri: string;
}


export class AddVideoCreditAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: AddVideoCreditAlt1PathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.credit+json" })
  request: AddVideoCreditAlt1RequestBody;
}


export class AddVideoCreditAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  credit?: shared.Credit;

  @Metadata()
  legacyError?: shared.LegacyError;
}
