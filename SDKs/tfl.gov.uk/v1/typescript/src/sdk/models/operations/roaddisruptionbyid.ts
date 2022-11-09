import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RoadDisruptionByIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=disruptionIds" })
  disruptionIds: string[];
}


export class RoadDisruptionByIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=stripContent" })
  stripContent?: boolean;
}


export class RoadDisruptionByIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RoadDisruptionByIdPathParams;

  @Metadata()
  queryParams: RoadDisruptionByIdQueryParams;
}


export class RoadDisruptionByIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tflApiPresentationEntitiesRoadDisruption?: shared.TflApiPresentationEntitiesRoadDisruption;
}
