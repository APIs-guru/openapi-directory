import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUserVotesEpisodesResponse extends SpeakeasyBase {
    contentType: string;
    episodeVotes?: shared.EpisodeVote[];
    statusCode: number;
}
