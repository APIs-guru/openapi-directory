import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LineTimetablePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fromStopPointId" })
  fromStopPointId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class LineTimetableRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LineTimetablePathParams;
}


export class LineTimetableResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tflApiPresentationEntitiesTimetableResponse?: shared.TflApiPresentationEntitiesTimetableResponse;
}
