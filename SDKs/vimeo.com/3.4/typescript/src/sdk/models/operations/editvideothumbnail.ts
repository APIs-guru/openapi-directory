import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditVideoThumbnailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=picture_id" })
  pictureId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class EditVideoThumbnailRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;
}


export class EditVideoThumbnailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditVideoThumbnailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditVideoThumbnailPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: EditVideoThumbnailRequestBody;

  @SpeakeasyMetadata()
  security: EditVideoThumbnailSecurity;
}


export class EditVideoThumbnailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  picture?: shared.Picture;
}
