import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGenreVodsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=genre_id" })
  genreId: string;
}

export enum GetGenreVodsDirectionEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum GetGenreVodsFilterEnum {
    Country = "country"
,    MyRegion = "my_region"
}

export enum GetGenreVodsSortEnum {
    Alphabetical = "alphabetical"
,    Date = "date"
,    Name = "name"
,    PublishTime = "publish.time"
,    Videos = "videos"
}


export class GetGenreVodsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetGenreVodsDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetGenreVodsFilterEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetGenreVodsSortEnum;
}


export class GetGenreVodsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetGenreVodsPathParams;

  @Metadata()
  queryParams: GetGenreVodsQueryParams;
}


export class GetGenreVodsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.OnDemandPage })
  onDemandPages?: shared.OnDemandPage[];
}
