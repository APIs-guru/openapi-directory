import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReplaceVideosInAlbumPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class ReplaceVideosInAlbumRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: string;
}


export class ReplaceVideosInAlbumSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ReplaceVideosInAlbumRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReplaceVideosInAlbumPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ReplaceVideosInAlbumRequestBody;

  @SpeakeasyMetadata()
  security: ReplaceVideosInAlbumSecurity;
}


export class ReplaceVideosInAlbumResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
