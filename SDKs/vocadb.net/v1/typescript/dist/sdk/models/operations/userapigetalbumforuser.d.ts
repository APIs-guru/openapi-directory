import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserApiGetAlbumForUserPathParams extends SpeakeasyBase {
    albumId: number;
    id: number;
}
export declare class UserApiGetAlbumForUserRequest extends SpeakeasyBase {
    pathParams: UserApiGetAlbumForUserPathParams;
}
export declare class UserApiGetAlbumForUserResponse extends SpeakeasyBase {
    albumForUserForApiContract?: shared.AlbumForUserForApiContract;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
