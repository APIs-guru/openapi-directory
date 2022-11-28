import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GamesDevelopmentTeamListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=game_pk" })
  gamePk: string;
}


export class GamesDevelopmentTeamListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GamesDevelopmentTeamList200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "json, name=next" })
  next?: string;

  @SpeakeasyMetadata({ data: "json, name=previous" })
  previous?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: shared.GamePersonList })
  results: shared.GamePersonList[];
}


export class GamesDevelopmentTeamListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GamesDevelopmentTeamListPathParams;

  @SpeakeasyMetadata()
  queryParams: GamesDevelopmentTeamListQueryParams;
}


export class GamesDevelopmentTeamListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  gamesDevelopmentTeamList200ApplicationJsonObject?: GamesDevelopmentTeamList200ApplicationJson;
}
