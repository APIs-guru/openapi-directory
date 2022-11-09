import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EpisodeVote extends SpeakeasyBase {
  @Metadata({ data: "json, name=episode_id" })
  episodeId?: number;

  @Metadata({ data: "json, name=vote" })
  vote?: number;

  @Metadata({ data: "json, name=voted_at" })
  votedAt?: number;
}
