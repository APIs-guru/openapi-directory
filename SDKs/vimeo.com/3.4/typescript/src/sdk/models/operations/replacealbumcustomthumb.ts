import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReplaceAlbumCustomThumbPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=thumbnail_id" })
  thumbnailId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class ReplaceAlbumCustomThumbRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active" })
  active?: boolean;
}


export class ReplaceAlbumCustomThumbSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ReplaceAlbumCustomThumbRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReplaceAlbumCustomThumbPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.picture+json" })
  request?: ReplaceAlbumCustomThumbRequestBody;

  @SpeakeasyMetadata()
  security: ReplaceAlbumCustomThumbSecurity;
}


export class ReplaceAlbumCustomThumbResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  picture?: shared.Picture;
}
