import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams extends SpeakeasyBase {
    albumId: number;
}
export declare class GetApiUsersCurrentAlbumCollectionStatusesAlbumIdRequest extends SpeakeasyBase {
    pathParams: GetApiUsersCurrentAlbumCollectionStatusesAlbumIdPathParams;
}
export declare class GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse extends SpeakeasyBase {
    albumForUserForApiContract?: shared.AlbumForUserForApiContract;
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
