import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RoadDisruptionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];
}


export class RoadDisruptionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=categories" })
  categories?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=closures" })
  closures?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=severities" })
  severities?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=stripContent" })
  stripContent?: boolean;
}


export class RoadDisruptionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RoadDisruptionPathParams;

  @Metadata()
  queryParams: RoadDisruptionQueryParams;
}


export class RoadDisruptionResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesRoadDisruption })
  tflApiPresentationEntitiesRoadDisruptions?: shared.TflApiPresentationEntitiesRoadDisruption[];
}
