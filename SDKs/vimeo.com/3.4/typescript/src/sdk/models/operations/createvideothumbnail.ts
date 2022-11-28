import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateVideoThumbnailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class CreateVideoThumbnailRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: number;
}


export class CreateVideoThumbnailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateVideoThumbnailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateVideoThumbnailPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: CreateVideoThumbnailRequestBody;

  @SpeakeasyMetadata()
  security: CreateVideoThumbnailSecurity;
}


export class CreateVideoThumbnailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  picture?: shared.Picture;
}
