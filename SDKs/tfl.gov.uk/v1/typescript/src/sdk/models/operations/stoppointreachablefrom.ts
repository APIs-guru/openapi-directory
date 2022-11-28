import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointReachableFromPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=lineId" })
  lineId: string;
}

export enum StopPointReachableFromServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}


export class StopPointReachableFromQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: StopPointReachableFromServiceTypesEnum[];
}


export class StopPointReachableFromRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointReachableFromPathParams;

  @SpeakeasyMetadata()
  queryParams: StopPointReachableFromQueryParams;
}


export class StopPointReachableFromResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesStopPoint })
  tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
