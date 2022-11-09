import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LineLineRoutesByIdsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}

export enum LineLineRoutesByIdsServiceTypesEnum {
    Regular = "Regular"
,    Night = "Night"
}


export class LineLineRoutesByIdsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: LineLineRoutesByIdsServiceTypesEnum[];
}


export class LineLineRoutesByIdsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LineLineRoutesByIdsPathParams;

  @Metadata()
  queryParams: LineLineRoutesByIdsQueryParams;
}


export class LineLineRoutesByIdsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesLine })
  tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
