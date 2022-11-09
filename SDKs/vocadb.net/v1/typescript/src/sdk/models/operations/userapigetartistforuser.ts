import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserApiGetArtistForUserPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artistId" })
  artistId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class UserApiGetArtistForUserRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetArtistForUserPathParams;
}


export class UserApiGetArtistForUserResponse extends SpeakeasyBase {
  @Metadata()
  artistForUserForApiContract?: shared.ArtistForUserForApiContract;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
