import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVodSeasonVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season_id" })
  seasonId: number;
}

export enum GetVodSeasonVideosFilterEnum {
    Viewable = "viewable"
}

export enum GetVodSeasonVideosSortEnum {
    Date = "date"
,    Default = "default"
,    Manual = "manual"
,    Name = "name"
,    PurchaseTime = "purchase_time"
,    ReleaseDate = "release_date"
}


export class GetVodSeasonVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVodSeasonVideosFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVodSeasonVideosSortEnum;
}


export class GetVodSeasonVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVodSeasonVideosPathParams;

  @Metadata()
  queryParams: GetVodSeasonVideosQueryParams;
}


export class GetVodSeasonVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
