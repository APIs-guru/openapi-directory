import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlaylistsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetPlaylistsIdQueryParams extends SpeakeasyBase {
    expand?: string[];
    fields?: string[];
}
export declare class GetPlaylistsIdRequest extends SpeakeasyBase {
    pathParams: GetPlaylistsIdPathParams;
    queryParams: GetPlaylistsIdQueryParams;
}
export declare class GetPlaylistsIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    error?: shared.Error;
    playlist?: shared.Playlist;
    statusCode: number;
}
