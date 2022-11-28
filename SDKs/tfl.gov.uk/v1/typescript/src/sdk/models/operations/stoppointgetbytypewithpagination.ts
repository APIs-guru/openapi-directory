import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointGetByTypeWithPaginationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=types" })
  types: string[];
}


export class StopPointGetByTypeWithPaginationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointGetByTypeWithPaginationPathParams;
}


export class StopPointGetByTypeWithPaginationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesStopPoint })
  tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
