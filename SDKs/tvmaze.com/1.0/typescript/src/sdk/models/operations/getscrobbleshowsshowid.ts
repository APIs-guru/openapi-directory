import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetScrobbleShowsShowIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}

export enum GetScrobbleShowsShowIdEmbedEnum {
    Episode = "episode"
}


export class GetScrobbleShowsShowIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetScrobbleShowsShowIdEmbedEnum;
}


export class GetScrobbleShowsShowIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetScrobbleShowsShowIdPathParams;

  @Metadata()
  queryParams: GetScrobbleShowsShowIdQueryParams;
}


export class GetScrobbleShowsShowIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MarkedEpisode })
  markedEpisodes?: shared.MarkedEpisode[];

  @Metadata()
  statusCode: number;
}
