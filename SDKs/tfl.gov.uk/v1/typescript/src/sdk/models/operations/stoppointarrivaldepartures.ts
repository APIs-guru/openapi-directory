import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointArrivalDeparturesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StopPointArrivalDeparturesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=lineIds" })
  lineIds: string[];
}


export class StopPointArrivalDeparturesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointArrivalDeparturesPathParams;

  @SpeakeasyMetadata()
  queryParams: StopPointArrivalDeparturesQueryParams;
}


export class StopPointArrivalDeparturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesArrivalDeparture })
  tflApiPresentationEntitiesArrivalDepartures?: shared.TflApiPresentationEntitiesArrivalDeparture[];
}
