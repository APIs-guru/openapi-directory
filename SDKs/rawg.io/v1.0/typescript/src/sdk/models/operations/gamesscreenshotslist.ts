import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GamesScreenshotsListPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=game_pk" })
  gamePk: string;
}


export class GamesScreenshotsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ordering" })
  ordering?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GamesScreenshotsListRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GamesScreenshotsListPathParams;

  @Metadata()
  queryParams: GamesScreenshotsListQueryParams;
}


export class GamesScreenshotsList200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count: number;

  @Metadata({ data: "json, name=next" })
  next?: string;

  @Metadata({ data: "json, name=previous" })
  previous?: string;

  @Metadata({ data: "json, name=results", elemType: shared.ScreenShot })
  results: shared.ScreenShot[];
}


export class GamesScreenshotsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  gamesScreenshotsList200ApplicationJsonObject?: GamesScreenshotsList200ApplicationJson;
}
