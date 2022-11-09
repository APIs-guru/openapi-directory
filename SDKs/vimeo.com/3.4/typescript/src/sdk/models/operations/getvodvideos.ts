import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetVodVideosPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}

export enum GetVodVideosDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetVodVideosFilterEnum {
    All = "all"
,    Buy = "buy"
,    ExpiringSoon = "expiring_soon"
,    Extra = "extra"
,    Main = "main"
,    MainViewable = "main.viewable"
,    Rent = "rent"
,    Trailer = "trailer"
,    Unwatched = "unwatched"
,    Viewable = "viewable"
,    Watched = "watched"
}

export enum GetVodVideosSortEnum {
    Date = "date"
,    Default = "default"
,    Episode = "episode"
,    Manual = "manual"
,    Name = "name"
,    PurchaseTime = "purchase_time"
,    ReleaseDate = "release_date"
}


export class GetVodVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetVodVideosDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetVodVideosFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetVodVideosSortEnum;
}


export class GetVodVideosRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVodVideosPathParams;

  @Metadata()
  queryParams: GetVodVideosQueryParams;
}


export class GetVodVideosResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Video })
  videos?: shared.Video[];
}
