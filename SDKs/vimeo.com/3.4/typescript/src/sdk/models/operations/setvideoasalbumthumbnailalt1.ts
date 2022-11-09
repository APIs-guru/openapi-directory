import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetVideoAsAlbumThumbnailAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class SetVideoAsAlbumThumbnailAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=time_code" })
  timeCode?: number;
}


export class SetVideoAsAlbumThumbnailAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SetVideoAsAlbumThumbnailAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: SetVideoAsAlbumThumbnailAlt1PathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: SetVideoAsAlbumThumbnailAlt1RequestBody;

  @Metadata()
  security: SetVideoAsAlbumThumbnailAlt1Security;
}


export class SetVideoAsAlbumThumbnailAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  album?: shared.Album;

  @Metadata()
  error?: shared.Error;
}
