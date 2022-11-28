import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class OccupancyGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class OccupancyGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: OccupancyGetPathParams;
}


export class OccupancyGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesCarParkOccupancy?: shared.TflApiPresentationEntitiesCarParkOccupancy;
}
