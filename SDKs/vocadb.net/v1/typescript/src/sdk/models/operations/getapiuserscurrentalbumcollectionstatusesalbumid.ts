import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=albumId" })
  albumId: number;
}


export class GetApiUsersCurrentAlbumCollectionStatusesAlbumIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams;
}


export class GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  albumForUserForApiContract?: shared.AlbumForUserForApiContract;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
