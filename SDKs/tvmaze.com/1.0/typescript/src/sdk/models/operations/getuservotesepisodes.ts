import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserVotesEpisodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.EpisodeVote })
  episodeVotes?: shared.EpisodeVote[];

  @Metadata()
  statusCode: number;
}
