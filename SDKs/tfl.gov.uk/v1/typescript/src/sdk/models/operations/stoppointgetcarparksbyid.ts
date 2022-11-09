import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopPointGetCarParksByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=stopPointId" })
  stopPointId: string;
}


export class StopPointGetCarParksByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopPointGetCarParksByIdPathParams;
}


export class StopPointGetCarParksByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesPlace })
  tflApiPresentationEntitiesPlaces?: shared.TflApiPresentationEntitiesPlace[];
}
