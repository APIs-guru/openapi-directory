import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiUsersCurrentFollowedArtistsArtistIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=artistId" })
  artistId: number;
}


export class GetApiUsersCurrentFollowedArtistsArtistIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiUsersCurrentFollowedArtistsArtistIdPathParams;
}


export class GetApiUsersCurrentFollowedArtistsArtistIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artistForUserForApiContract?: shared.ArtistForUserForApiContract;

  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
