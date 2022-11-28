import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RoadDisruptionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class RoadDisruptionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=categories" })
  categories?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=closures" })
  closures?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=severities" })
  severities?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=stripContent" })
  stripContent?: boolean;
}


export class RoadDisruptionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RoadDisruptionPathParams;

  @SpeakeasyMetadata()
  queryParams: RoadDisruptionQueryParams;
}


export class RoadDisruptionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesRoadDisruption })
  tflApiPresentationEntitiesRoadDisruptions?: shared.TflApiPresentationEntitiesRoadDisruption[];
}
