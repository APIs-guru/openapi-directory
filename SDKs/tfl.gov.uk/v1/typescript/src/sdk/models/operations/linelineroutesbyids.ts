import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineLineRoutesByIdsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}

export enum LineLineRoutesByIdsServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}


export class LineLineRoutesByIdsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: LineLineRoutesByIdsServiceTypesEnum[];
}


export class LineLineRoutesByIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineLineRoutesByIdsPathParams;

  @SpeakeasyMetadata()
  queryParams: LineLineRoutesByIdsQueryParams;
}


export class LineLineRoutesByIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesLine })
  tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
