import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetTextTracksAlt1PathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare class GetTextTracksAlt1Request extends SpeakeasyBase {
    pathParams: GetTextTracksAlt1PathParams;
}
export declare class GetTextTracksAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    textTracks?: shared.TextTrack[];
}
