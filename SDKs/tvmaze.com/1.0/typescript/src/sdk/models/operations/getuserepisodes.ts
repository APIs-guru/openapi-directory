import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetUserEpisodesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=show_id" })
  showId?: number;
}


export class GetUserEpisodesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetUserEpisodesQueryParams;
}


export class GetUserEpisodesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MarkedEpisode })
  markedEpisodes?: shared.MarkedEpisode[];

  @Metadata()
  statusCode: number;
}
