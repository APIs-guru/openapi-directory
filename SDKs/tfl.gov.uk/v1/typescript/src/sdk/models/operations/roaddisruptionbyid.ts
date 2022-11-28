import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RoadDisruptionByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=disruptionIds" })
  disruptionIds: string[];
}


export class RoadDisruptionByIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stripContent" })
  stripContent?: boolean;
}


export class RoadDisruptionByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RoadDisruptionByIdPathParams;

  @SpeakeasyMetadata()
  queryParams: RoadDisruptionByIdQueryParams;
}


export class RoadDisruptionByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesRoadDisruption?: shared.TflApiPresentationEntitiesRoadDisruption;
}
