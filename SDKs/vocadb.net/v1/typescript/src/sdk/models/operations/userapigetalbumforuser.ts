import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserApiGetAlbumForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=albumId" })
  albumId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserApiGetAlbumForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetAlbumForUserPathParams;
}


export class UserApiGetAlbumForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  albumForUserForApiContract?: shared.AlbumForUserForApiContract;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
