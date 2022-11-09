import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteUserEpisodesEpisodeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=episode_id" })
  episodeId: number;
}


export class DeleteUserEpisodesEpisodeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteUserEpisodesEpisodeIdPathParams;
}


export class DeleteUserEpisodesEpisodeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
