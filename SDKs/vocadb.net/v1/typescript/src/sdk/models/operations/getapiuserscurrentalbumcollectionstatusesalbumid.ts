import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=albumId" })
  albumId: number;
}


export class GetApiUsersCurrentAlbumCollectionStatusesAlbumIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams;
}


export class GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse extends SpeakeasyBase {
  @Metadata()
  albumForUserForApiContract?: shared.AlbumForUserForApiContract;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
