import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ReplaceAlbumCustomThumbPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=thumbnail_id" })
  thumbnailId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class ReplaceAlbumCustomThumbRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=active" })
  active?: boolean;
}


export class ReplaceAlbumCustomThumbSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ReplaceAlbumCustomThumbRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReplaceAlbumCustomThumbPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: ReplaceAlbumCustomThumbRequestBody;

  @Metadata()
  security: ReplaceAlbumCustomThumbSecurity;
}


export class ReplaceAlbumCustomThumbResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  picture?: shared.Picture;
}
