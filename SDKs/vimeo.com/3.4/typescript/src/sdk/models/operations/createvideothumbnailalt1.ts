import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVideoThumbnailAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=channel_id" })
  channelId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CreateVideoThumbnailAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=time" })
  time?: number;
}


export class CreateVideoThumbnailAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateVideoThumbnailAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVideoThumbnailAlt1PathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: CreateVideoThumbnailAlt1RequestBody;

  @Metadata()
  security: CreateVideoThumbnailAlt1Security;
}


export class CreateVideoThumbnailAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  picture?: shared.Picture;
}
