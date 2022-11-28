import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointRoutePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum StopPointRouteServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}


export class StopPointRouteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: StopPointRouteServiceTypesEnum[];
}


export class StopPointRouteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointRoutePathParams;

  @SpeakeasyMetadata()
  queryParams: StopPointRouteQueryParams;
}


export class StopPointRouteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesStopPointRouteSection })
  tflApiPresentationEntitiesStopPointRouteSections?: shared.TflApiPresentationEntitiesStopPointRouteSection[];
}
