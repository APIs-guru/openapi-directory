import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AccidentStatsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class AccidentStatsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AccidentStatsGetPathParams;
}


export class AccidentStatsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesAccidentStatsAccidentDetail })
  tflApiPresentationEntitiesAccidentStatsAccidentDetails?: shared.TflApiPresentationEntitiesAccidentStatsAccidentDetail[];
}
