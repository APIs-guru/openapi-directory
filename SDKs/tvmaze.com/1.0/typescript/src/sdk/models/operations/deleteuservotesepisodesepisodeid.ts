import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserVotesEpisodesEpisodeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=episode_id" })
  episodeId: number;
}


export class DeleteUserVotesEpisodesEpisodeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserVotesEpisodesEpisodeIdPathParams;
}


export class DeleteUserVotesEpisodesEpisodeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
