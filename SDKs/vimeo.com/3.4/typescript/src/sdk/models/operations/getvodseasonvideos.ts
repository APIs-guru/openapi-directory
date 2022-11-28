import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVodSeasonVideosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season_id" })
  seasonId: number;
}

export enum GetVodSeasonVideosFilterEnum {
    Viewable = "viewable"
}

export enum GetVodSeasonVideosSortEnum {
    Date = "date",
    Default = "default",
    Manual = "manual",
    Name = "name",
    PurchaseTime = "purchase_time",
    ReleaseDate = "release_date"
}


export class GetVodSeasonVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVodSeasonVideosFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVodSeasonVideosSortEnum;
}


export class GetVodSeasonVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVodSeasonVideosPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVodSeasonVideosQueryParams;
}


export class GetVodSeasonVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
