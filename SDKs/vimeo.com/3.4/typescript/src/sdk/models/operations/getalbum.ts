import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAlbumPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=album_id" })
  albumId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class GetAlbumRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAlbumPathParams;
}


export class GetAlbumResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  album?: shared.Album;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;
}
