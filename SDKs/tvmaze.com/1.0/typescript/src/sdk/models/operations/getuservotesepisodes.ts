import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserVotesEpisodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.EpisodeVote })
  episodeVotes?: shared.EpisodeVote[];

  @SpeakeasyMetadata()
  statusCode: number;
}
