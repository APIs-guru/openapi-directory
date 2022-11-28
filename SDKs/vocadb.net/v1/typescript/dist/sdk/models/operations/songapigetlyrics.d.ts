import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SongApiGetLyricsPathParams extends SpeakeasyBase {
    lyricsId: number;
}
export declare class SongApiGetLyricsRequest extends SpeakeasyBase {
    pathParams: SongApiGetLyricsPathParams;
}
export declare class SongApiGetLyricsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    lyricsForSongContract?: shared.LyricsForSongContract;
    statusCode: number;
}
