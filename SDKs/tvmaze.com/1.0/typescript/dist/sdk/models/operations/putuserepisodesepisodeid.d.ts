import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUserEpisodesEpisodeIdPathParams extends SpeakeasyBase {
    episodeId: number;
}
export declare class PutUserEpisodesEpisodeIdRequest extends SpeakeasyBase {
    pathParams: PutUserEpisodesEpisodeIdPathParams;
    request?: shared.MarkedEpisodeInput;
}
export declare class PutUserEpisodesEpisodeIdResponse extends SpeakeasyBase {
    contentType: string;
    markedEpisode?: shared.MarkedEpisode;
    statusCode: number;
}
