import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAlbumLogoPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=logo_id" })
  logoId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class DeleteAlbumLogoSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteAlbumLogoRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAlbumLogoPathParams;

  @SpeakeasyMetadata()
  security: DeleteAlbumLogoSecurity;
}


export class DeleteAlbumLogoResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
