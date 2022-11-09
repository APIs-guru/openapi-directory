import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutScrobbleEpisodesEpisodeIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=episode_id" })
  episodeId: number;
}


export class PutScrobbleEpisodesEpisodeIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutScrobbleEpisodesEpisodeIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.MarkedEpisode;
}


export class PutScrobbleEpisodesEpisodeIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  markedEpisode?: shared.MarkedEpisode;

  @Metadata()
  statusCode: number;
}
