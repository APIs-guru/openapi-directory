import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserEpisodesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=show_id" })
  showId?: number;
}


export class GetUserEpisodesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetUserEpisodesQueryParams;
}


export class GetUserEpisodesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MarkedEpisode })
  markedEpisodes?: shared.MarkedEpisode[];

  @SpeakeasyMetadata()
  statusCode: number;
}
