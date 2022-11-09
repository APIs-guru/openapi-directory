import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GamesDevelopmentTeamListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=game_pk" })
  gamePk: string;
}


export class GamesDevelopmentTeamListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GamesDevelopmentTeamListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesDevelopmentTeamListPathParams;

  @Metadata()
  queryParams: GamesDevelopmentTeamListQueryParams;
}


export class GamesDevelopmentTeamList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.GamePersonList })
  results: shared.GamePersonList[];
}


export class GamesDevelopmentTeamListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  gamesDevelopmentTeamList200ApplicationJsonObject?: GamesDevelopmentTeamList200ApplicationJson;
}
