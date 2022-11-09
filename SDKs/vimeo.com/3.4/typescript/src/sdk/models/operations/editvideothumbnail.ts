import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditVideoThumbnailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=picture_id" })
  pictureId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class EditVideoThumbnailRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;
}


export class EditVideoThumbnailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditVideoThumbnailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditVideoThumbnailPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: EditVideoThumbnailRequestBody;

  @Metadata()
  security: EditVideoThumbnailSecurity;
}


export class EditVideoThumbnailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  picture?: shared.Picture;
}
