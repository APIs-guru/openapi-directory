import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineTimetableToPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fromStopPointId" })
  fromStopPointId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=toStopPointId" })
  toStopPointId: string;
}


export class LineTimetableToRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineTimetableToPathParams;
}


export class LineTimetableToResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesTimetableResponse?: shared.TflApiPresentationEntitiesTimetableResponse;
}
