import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserApiGetAlbumForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=albumId" })
  albumId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserApiGetAlbumForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetAlbumForUserPathParams;
}


export class UserApiGetAlbumForUserResponse extends SpeakeasyBase {
  @Metadata()
  albumForUserForApiContract?: shared.AlbumForUserForApiContract;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
