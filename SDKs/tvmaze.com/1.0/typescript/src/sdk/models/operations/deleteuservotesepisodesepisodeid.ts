import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserVotesEpisodesEpisodeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=episode_id" })
  episodeId: number;
}


export class DeleteUserVotesEpisodesEpisodeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUserVotesEpisodesEpisodeIdPathParams;
}


export class DeleteUserVotesEpisodesEpisodeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
