import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutUserVotesEpisodesEpisodeIdPathParams extends SpeakeasyBase {
    episodeId: number;
}
export declare class PutUserVotesEpisodesEpisodeIdRequest extends SpeakeasyBase {
    pathParams: PutUserVotesEpisodesEpisodeIdPathParams;
    request?: shared.EpisodeVoteInput;
}
export declare class PutUserVotesEpisodesEpisodeIdResponse extends SpeakeasyBase {
    contentType: string;
    episodeVote?: shared.EpisodeVote;
    statusCode: number;
}
