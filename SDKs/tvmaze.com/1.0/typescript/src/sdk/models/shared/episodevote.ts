import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EpisodeVote extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=episode_id" })
  episodeId?: number;

  @SpeakeasyMetadata({ data: "json, name=vote" })
  vote?: number;

  @SpeakeasyMetadata({ data: "json, name=voted_at" })
  votedAt?: number;
}


export class EpisodeVoteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=vote" })
  vote?: number;
}
