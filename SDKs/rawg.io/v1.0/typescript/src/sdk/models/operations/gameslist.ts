import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GamesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=creators" })
  creators?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dates" })
  dates?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=developers" })
  developers?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_additions" })
  excludeAdditions?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_collection" })
  excludeCollection?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_game_series" })
  excludeGameSeries?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_parents" })
  excludeParents?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_stores" })
  excludeStores?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=genres" })
  genres?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metacritic" })
  metacritic?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=parent_platforms" })
  parentPlatforms?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platforms" })
  platforms?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=platforms_count" })
  platformsCount?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=publishers" })
  publishers?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_exact" })
  searchExact?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search_precise" })
  searchPrecise?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stores" })
  stores?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updated" })
  updated?: string;
}


export class GamesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Game })
  results: shared.Game[];
}


export class GamesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GamesListQueryParams;
}


export class GamesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gamesList200ApplicationJsonObject?: GamesList200ApplicationJson;
}
