import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserVotesEpisodesEpisodeIdPathParams extends SpeakeasyBase {
    episodeId: number;
}
export declare class GetUserVotesEpisodesEpisodeIdRequest extends SpeakeasyBase {
    pathParams: GetUserVotesEpisodesEpisodeIdPathParams;
}
export declare class GetUserVotesEpisodesEpisodeIdResponse extends SpeakeasyBase {
    contentType: string;
    episodeVote?: shared.EpisodeVote;
    statusCode: number;
}
