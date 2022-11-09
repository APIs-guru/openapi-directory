import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReplaceAlbumLogoPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=logo_id" })
  logoId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class ReplaceAlbumLogoRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;
}


export class ReplaceAlbumLogoSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ReplaceAlbumLogoRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReplaceAlbumLogoPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: ReplaceAlbumLogoRequestBody;

  @Metadata()
  security: ReplaceAlbumLogoSecurity;
}


export class ReplaceAlbumLogoResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  picture?: shared.Picture;
}
