import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUserVotesEpisodesEpisodeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=episode_id" })
  episodeId: number;
}


export class PutUserVotesEpisodesEpisodeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUserVotesEpisodesEpisodeIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.EpisodeVoteInput;
}


export class PutUserVotesEpisodesEpisodeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  episodeVote?: shared.EpisodeVote;

  @SpeakeasyMetadata()
  statusCode: number;
}
