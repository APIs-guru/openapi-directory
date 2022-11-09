import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAlbumCustomThumbPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class CreateAlbumCustomThumbSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateAlbumCustomThumbRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAlbumCustomThumbPathParams;

  @Metadata()
  security: CreateAlbumCustomThumbSecurity;
}


export class CreateAlbumCustomThumbResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  picture?: shared.Picture;
}
