import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUserEpisodesEpisodeIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=episode_id" })
  episodeId: number;
}


export class PutUserEpisodesEpisodeIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUserEpisodesEpisodeIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.MarkedEpisodeInput;
}


export class PutUserEpisodesEpisodeIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  markedEpisode?: shared.MarkedEpisode;

  @SpeakeasyMetadata()
  statusCode: number;
}
