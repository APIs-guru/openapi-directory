import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteUserEpisodesEpisodeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=episode_id" })
  episodeId: number;
}


export class DeleteUserEpisodesEpisodeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteUserEpisodesEpisodeIdPathParams;
}


export class DeleteUserEpisodesEpisodeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
