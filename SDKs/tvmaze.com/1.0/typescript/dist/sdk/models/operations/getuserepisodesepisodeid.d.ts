import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserEpisodesEpisodeIdPathParams extends SpeakeasyBase {
    episodeId: number;
}
export declare class GetUserEpisodesEpisodeIdRequest extends SpeakeasyBase {
    pathParams: GetUserEpisodesEpisodeIdPathParams;
}
export declare class GetUserEpisodesEpisodeIdResponse extends SpeakeasyBase {
    contentType: string;
    markedEpisode?: shared.MarkedEpisode;
    statusCode: number;
}
