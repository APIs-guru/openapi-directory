import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineTimetablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fromStopPointId" })
  fromStopPointId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LineTimetableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineTimetablePathParams;
}


export class LineTimetableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesTimetableResponse?: shared.TflApiPresentationEntitiesTimetableResponse;
}
