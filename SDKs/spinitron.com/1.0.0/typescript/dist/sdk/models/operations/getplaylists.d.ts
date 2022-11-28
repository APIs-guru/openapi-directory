import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPlaylistsQueryParams extends SpeakeasyBase {
    count?: number;
    end?: Date;
    expand?: string[];
    fields?: string[];
    page?: number;
    personaId?: number;
    showId?: number;
    start?: Date;
}
export declare class GetPlaylists200ApplicationJsonLinks extends SpeakeasyBase {
    self?: shared.Link;
}
export declare class GetPlaylists200ApplicationJson extends SpeakeasyBase {
    links?: GetPlaylists200ApplicationJsonLinks;
    meta?: shared.Pagination;
    items?: shared.Playlist[];
}
export declare class GetPlaylistsRequest extends SpeakeasyBase {
    queryParams: GetPlaylistsQueryParams;
}
export declare class GetPlaylistsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    getPlaylists200ApplicationJsonObject?: GetPlaylists200ApplicationJson;
    statusCode: number;
}
