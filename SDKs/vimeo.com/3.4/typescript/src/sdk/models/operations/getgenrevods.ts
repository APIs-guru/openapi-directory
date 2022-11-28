import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetGenreVodsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=genre_id" })
  genreId: string;
}

export enum GetGenreVodsDirectionEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum GetGenreVodsFilterEnum {
    Country = "country",
    MyRegion = "my_region"
}

export enum GetGenreVodsSortEnum {
    Alphabetical = "alphabetical",
    Date = "date",
    Name = "name",
    PublishTime = "publish.time",
    Videos = "videos"
}


export class GetGenreVodsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: GetGenreVodsDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: GetGenreVodsFilterEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: GetGenreVodsSortEnum;
}


export class GetGenreVodsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenreVodsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetGenreVodsQueryParams;
}


export class GetGenreVodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.OnDemandPage })
  onDemandPages?: shared.OnDemandPage[];
}
