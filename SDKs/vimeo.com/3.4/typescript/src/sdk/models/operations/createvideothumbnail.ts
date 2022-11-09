import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVideoThumbnailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CreateVideoThumbnailRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;

  @Metadata({ data: "json, name=time" })
  time?: number;
}


export class CreateVideoThumbnailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateVideoThumbnailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVideoThumbnailPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: CreateVideoThumbnailRequestBody;

  @Metadata()
  security: CreateVideoThumbnailSecurity;
}


export class CreateVideoThumbnailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  picture?: shared.Picture;
}
