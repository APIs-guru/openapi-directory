import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiUsersCurrentFollowedArtistsArtistIdPathParams extends SpeakeasyBase {
    artistId: number;
}
export declare class GetApiUsersCurrentFollowedArtistsArtistIdRequest extends SpeakeasyBase {
    pathParams: GetApiUsersCurrentFollowedArtistsArtistIdPathParams;
}
export declare class GetApiUsersCurrentFollowedArtistsArtistIdResponse extends SpeakeasyBase {
    artistForUserForApiContract?: shared.ArtistForUserForApiContract;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
