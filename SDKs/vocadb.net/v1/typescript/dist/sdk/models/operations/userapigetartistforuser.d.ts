import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserApiGetArtistForUserPathParams extends SpeakeasyBase {
    artistId: number;
    id: number;
}
export declare class UserApiGetArtistForUserRequest extends SpeakeasyBase {
    pathParams: UserApiGetArtistForUserPathParams;
}
export declare class UserApiGetArtistForUserResponse extends SpeakeasyBase {
    artistForUserForApiContract?: shared.ArtistForUserForApiContract;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
