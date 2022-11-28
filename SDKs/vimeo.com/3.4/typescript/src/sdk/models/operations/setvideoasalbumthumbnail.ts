import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetVideoAsAlbumThumbnailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class SetVideoAsAlbumThumbnailRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time_code" })
  timeCode?: number;
}


export class SetVideoAsAlbumThumbnailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SetVideoAsAlbumThumbnailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetVideoAsAlbumThumbnailPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SetVideoAsAlbumThumbnailRequestBody;

  @SpeakeasyMetadata()
  security: SetVideoAsAlbumThumbnailSecurity;
}


export class SetVideoAsAlbumThumbnailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  album?: shared.Album;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
