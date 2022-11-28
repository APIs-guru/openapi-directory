import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserVotesEpisodesEpisodeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=episode_id" })
  episodeId: number;
}


export class GetUserVotesEpisodesEpisodeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserVotesEpisodesEpisodeIdPathParams;
}


export class GetUserVotesEpisodesEpisodeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  episodeVote?: shared.EpisodeVote;

  @SpeakeasyMetadata()
  statusCode: number;
}
