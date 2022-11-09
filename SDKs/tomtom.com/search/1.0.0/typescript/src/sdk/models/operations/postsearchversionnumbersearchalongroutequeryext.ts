import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSearchVersionNumberSearchAlongRouteQueryExtPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=maxDetourTime" })
  maxDetourTime: number;
}


export class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints extends SpeakeasyBase {
  @Metadata({ data: "json, name=lat" })
  lat?: number;

  @Metadata({ data: "json, name=lon" })
  lon?: number;
}


export class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute extends SpeakeasyBase {
  @Metadata({ data: "json, name=points", elemType: operations.PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints })
  points?: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints[];
}


export class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=route" })
  route?: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute;
}


export class PostSearchVersionNumberSearchAlongRouteQueryExtRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostSearchVersionNumberSearchAlongRouteQueryExtPathParams;

  @Metadata()
  queryParams: PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody;
}


export class PostSearchVersionNumberSearchAlongRouteQueryExtResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
