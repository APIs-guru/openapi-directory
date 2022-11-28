import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReplaceVideosInAlbumAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;
}


export class ReplaceVideosInAlbumAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=videos" })
  videos: string;
}


export class ReplaceVideosInAlbumAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ReplaceVideosInAlbumAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReplaceVideosInAlbumAlt1PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ReplaceVideosInAlbumAlt1RequestBody;

  @SpeakeasyMetadata()
  security: ReplaceVideosInAlbumAlt1Security;
}


export class ReplaceVideosInAlbumAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
