import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopPointArrivalDeparturesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StopPointArrivalDeparturesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=lineIds" })
  lineIds: string[];
}


export class StopPointArrivalDeparturesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopPointArrivalDeparturesPathParams;

  @Metadata()
  queryParams: StopPointArrivalDeparturesQueryParams;
}


export class StopPointArrivalDeparturesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesArrivalDeparture })
  tflApiPresentationEntitiesArrivalDepartures?: shared.TflApiPresentationEntitiesArrivalDeparture[];
}
