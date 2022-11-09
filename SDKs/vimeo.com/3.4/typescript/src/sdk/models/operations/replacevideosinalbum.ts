import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReplaceVideosInAlbumPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class ReplaceVideosInAlbumRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos: string;
}


export class ReplaceVideosInAlbumSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ReplaceVideosInAlbumRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReplaceVideosInAlbumPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: ReplaceVideosInAlbumRequestBody;

  @Metadata()
  security: ReplaceVideosInAlbumSecurity;
}


export class ReplaceVideosInAlbumResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
