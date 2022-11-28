import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetScrobbleShowsShowIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=show_id" })
  showId: number;
}

export enum GetScrobbleShowsShowIdEmbedEnum {
    Episode = "episode"
}


export class GetScrobbleShowsShowIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetScrobbleShowsShowIdEmbedEnum;
}


export class GetScrobbleShowsShowIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetScrobbleShowsShowIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetScrobbleShowsShowIdQueryParams;
}


export class GetScrobbleShowsShowIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MarkedEpisode })
  markedEpisodes?: shared.MarkedEpisode[];

  @SpeakeasyMetadata()
  statusCode: number;
}
