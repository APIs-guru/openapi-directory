import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserVotesEpisodesEpisodeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=episode_id" })
  episodeId: number;
}


export class GetUserVotesEpisodesEpisodeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserVotesEpisodesEpisodeIdPathParams;
}


export class GetUserVotesEpisodesEpisodeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  episodeVote?: shared.EpisodeVote;

  @Metadata()
  statusCode: number;
}
