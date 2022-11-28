import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVodVideosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}

export enum GetVodVideosDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetVodVideosFilterEnum {
    All = "all",
    Buy = "buy",
    ExpiringSoon = "expiring_soon",
    Extra = "extra",
    Main = "main",
    MainViewable = "main.viewable",
    Rent = "rent",
    Trailer = "trailer",
    Unwatched = "unwatched",
    Viewable = "viewable",
    Watched = "watched"
}

export enum GetVodVideosSortEnum {
    Date = "date",
    Default = "default",
    Episode = "episode",
    Manual = "manual",
    Name = "name",
    PurchaseTime = "purchase_time",
    ReleaseDate = "release_date"
}


export class GetVodVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVodVideosDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVodVideosFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVodVideosSortEnum;
}


export class GetVodVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVodVideosPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVodVideosQueryParams;
}


export class GetVodVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
