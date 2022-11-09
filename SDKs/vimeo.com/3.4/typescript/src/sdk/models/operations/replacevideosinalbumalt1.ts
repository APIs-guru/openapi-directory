import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReplaceVideosInAlbumAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;
}


export class ReplaceVideosInAlbumAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=videos" })
  videos: string;
}


export class ReplaceVideosInAlbumAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ReplaceVideosInAlbumAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: ReplaceVideosInAlbumAlt1PathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: ReplaceVideosInAlbumAlt1RequestBody;

  @Metadata()
  security: ReplaceVideosInAlbumAlt1Security;
}


export class ReplaceVideosInAlbumAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;
}
