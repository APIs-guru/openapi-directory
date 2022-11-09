import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GamesListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=creators" })
  creators?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=dates" })
  dates?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=developers" })
  developers?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_additions" })
  excludeAdditions?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_collection" })
  excludeCollection?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_game_series" })
  excludeGameSeries?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_parents" })
  excludeParents?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=exclude_stores" })
  excludeStores?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=genres" })
  genres?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metacritic" })
  metacritic?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=parent_platforms" })
  parentPlatforms?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platforms" })
  platforms?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=platforms_count" })
  platformsCount?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=publishers" })
  publishers?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search_exact" })
  searchExact?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search_precise" })
  searchPrecise?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=stores" })
  stores?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=updated" })
  updated?: string;
}


export class GamesListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GamesListQueryParams;
}


export class GamesList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.Game })
  results: shared.Game[];
}


export class GamesListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  gamesList200ApplicationJsonObject?: GamesList200ApplicationJson;
}
