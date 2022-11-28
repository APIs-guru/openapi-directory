import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutScrobbleEpisodesEpisodeIdPathParams extends SpeakeasyBase {
    episodeId: number;
}
export declare class PutScrobbleEpisodesEpisodeIdRequest extends SpeakeasyBase {
    pathParams: PutScrobbleEpisodesEpisodeIdPathParams;
    request?: shared.MarkedEpisodeInput;
}
export declare class PutScrobbleEpisodesEpisodeIdResponse extends SpeakeasyBase {
    contentType: string;
    markedEpisode?: shared.MarkedEpisode;
    statusCode: number;
}
