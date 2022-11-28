import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GamesParentGamesListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=game_pk" })
  gamePk: string;
}


export class GamesParentGamesListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GamesParentGamesList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.Game })
  results: shared.Game[];
}


export class GamesParentGamesListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GamesParentGamesListPathParams;

  @SpeakeasyMetadata()
  queryParams: GamesParentGamesListQueryParams;
}


export class GamesParentGamesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gamesParentGamesList200ApplicationJsonObject?: GamesParentGamesList200ApplicationJson;
}
