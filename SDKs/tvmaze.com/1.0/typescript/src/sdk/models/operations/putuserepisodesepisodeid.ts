import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutUserEpisodesEpisodeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=episode_id" })
  episodeId: number;
}


export class PutUserEpisodesEpisodeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutUserEpisodesEpisodeIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.MarkedEpisode;
}


export class PutUserEpisodesEpisodeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  markedEpisode?: shared.MarkedEpisode;

  @Metadata()
  statusCode: number;
}
