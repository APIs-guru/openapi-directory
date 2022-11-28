import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserApiGetArtistForUserPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artistId" })
  artistId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserApiGetArtistForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetArtistForUserPathParams;
}


export class UserApiGetArtistForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artistForUserForApiContract?: shared.ArtistForUserForApiContract;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
