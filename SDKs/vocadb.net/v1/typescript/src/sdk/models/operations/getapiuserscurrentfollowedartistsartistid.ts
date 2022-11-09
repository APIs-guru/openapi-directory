import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiUsersCurrentFollowedArtistsArtistIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artistId" })
  artistId: number;
}


export class GetApiUsersCurrentFollowedArtistsArtistIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiUsersCurrentFollowedArtistsArtistIdPathParams;
}


export class GetApiUsersCurrentFollowedArtistsArtistIdResponse extends SpeakeasyBase {
  @Metadata()
  artistForUserForApiContract?: shared.ArtistForUserForApiContract;

  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
