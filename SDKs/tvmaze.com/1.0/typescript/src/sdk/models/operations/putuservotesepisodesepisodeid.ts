import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUserVotesEpisodesEpisodeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=episode_id" })
  episodeId: number;
}


export class PutUserVotesEpisodesEpisodeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUserVotesEpisodesEpisodeIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.EpisodeVote;
}


export class PutUserVotesEpisodesEpisodeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  episodeVote?: shared.EpisodeVote;

  @Metadata()
  statusCode: number;
}
