import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SetVideoAsAlbumThumbnailPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=video_id" })
  videoId: number;
}


export class SetVideoAsAlbumThumbnailRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=time_code" })
  timeCode?: number;
}


export class SetVideoAsAlbumThumbnailSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class SetVideoAsAlbumThumbnailRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetVideoAsAlbumThumbnailPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: SetVideoAsAlbumThumbnailRequestBody;

  @Metadata()
  security: SetVideoAsAlbumThumbnailSecurity;
}


export class SetVideoAsAlbumThumbnailResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  album?: shared.Album;

  @Metadata()
  error?: shared.Error;
}
