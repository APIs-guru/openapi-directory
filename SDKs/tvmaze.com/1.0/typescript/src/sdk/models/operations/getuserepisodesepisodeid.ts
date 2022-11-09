import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserEpisodesEpisodeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=episode_id" })
  episodeId: number;
}


export class GetUserEpisodesEpisodeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetUserEpisodesEpisodeIdPathParams;
}


export class GetUserEpisodesEpisodeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  markedEpisode?: shared.MarkedEpisode;

  @Metadata()
  statusCode: number;
}
