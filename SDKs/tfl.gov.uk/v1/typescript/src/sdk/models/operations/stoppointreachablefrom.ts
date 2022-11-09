import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopPointReachableFromPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=lineId" })
  lineId: string;
}

export enum StopPointReachableFromServiceTypesEnum {
    Regular = "Regular"
,    Night = "Night"
}


export class StopPointReachableFromQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: StopPointReachableFromServiceTypesEnum[];
}


export class StopPointReachableFromRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopPointReachableFromPathParams;

  @Metadata()
  queryParams: StopPointReachableFromQueryParams;
}


export class StopPointReachableFromResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesStopPoint })
  tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
