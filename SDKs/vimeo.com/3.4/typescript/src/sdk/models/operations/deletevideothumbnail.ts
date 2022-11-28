import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVideoThumbnailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=picture_id" })
  pictureId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class DeleteVideoThumbnailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteVideoThumbnailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVideoThumbnailPathParams;

  @SpeakeasyMetadata()
  security: DeleteVideoThumbnailSecurity;
}


export class DeleteVideoThumbnailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
