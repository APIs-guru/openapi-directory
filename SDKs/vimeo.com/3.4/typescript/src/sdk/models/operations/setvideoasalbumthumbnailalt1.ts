import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SetVideoAsAlbumThumbnailAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class SetVideoAsAlbumThumbnailAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=time_code" })
  timeCode?: number;
}


export class SetVideoAsAlbumThumbnailAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SetVideoAsAlbumThumbnailAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetVideoAsAlbumThumbnailAlt1PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: SetVideoAsAlbumThumbnailAlt1RequestBody;

  @SpeakeasyMetadata()
  security: SetVideoAsAlbumThumbnailAlt1Security;
}


export class SetVideoAsAlbumThumbnailAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  album?: shared.Album;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
