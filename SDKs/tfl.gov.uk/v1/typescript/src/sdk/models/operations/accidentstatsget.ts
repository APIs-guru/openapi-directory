import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AccidentStatsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class AccidentStatsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AccidentStatsGetPathParams;
}


export class AccidentStatsGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesAccidentStatsAccidentDetail })
  tflApiPresentationEntitiesAccidentStatsAccidentDetails?: shared.TflApiPresentationEntitiesAccidentStatsAccidentDetail[];
}
