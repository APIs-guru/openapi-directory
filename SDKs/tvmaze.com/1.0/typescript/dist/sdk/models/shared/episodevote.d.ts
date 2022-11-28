import { SpeakeasyBase } from "../../../internal/utils";
export declare class EpisodeVote extends SpeakeasyBase {
    episodeId?: number;
    vote?: number;
    votedAt?: number;
}
export declare class EpisodeVoteInput extends SpeakeasyBase {
    vote?: number;
}
