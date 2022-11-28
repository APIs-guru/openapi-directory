import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSearchVersionNumberSearchAlongRouteQueryExtPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ext" })
  ext: shared.ExtEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=query" })
  query: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=versionNumber" })
  versionNumber: number;
}


export class PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxDetourTime" })
  maxDetourTime: number;
}


export class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lat" })
  lat?: number;

  @SpeakeasyMetadata({ data: "json, name=lon" })
  lon?: number;
}


export class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=points", elemType: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints })
  points?: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints[];
}


export class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=route" })
  route?: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute;
}


export class PostSearchVersionNumberSearchAlongRouteQueryExtRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostSearchVersionNumberSearchAlongRouteQueryExtPathParams;

  @SpeakeasyMetadata()
  queryParams: PostSearchVersionNumberSearchAlongRouteQueryExtQueryParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody;
}


export class PostSearchVersionNumberSearchAlongRouteQueryExtResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
