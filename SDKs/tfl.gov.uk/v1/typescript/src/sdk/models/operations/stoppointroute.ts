import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopPointRoutePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum StopPointRouteServiceTypesEnum {
    Regular = "Regular"
,    Night = "Night"
}


export class StopPointRouteQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: StopPointRouteServiceTypesEnum[];
}


export class StopPointRouteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopPointRoutePathParams;

  @Metadata()
  queryParams: StopPointRouteQueryParams;
}


export class StopPointRouteResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesStopPointRouteSection })
  tflApiPresentationEntitiesStopPointRouteSections?: shared.TflApiPresentationEntitiesStopPointRouteSection[];
}
