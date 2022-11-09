import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class LineArrivalsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];

  @Metadata({ data: "pathParam, style=simple;explode=false;name=stopPointId" })
  stopPointId: string;
}

export enum LineArrivalsDirectionEnum {
    Inbound = "inbound"
,    Outbound = "outbound"
,    All = "all"
}


export class LineArrivalsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=destinationStationId" })
  destinationStationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: LineArrivalsDirectionEnum;
}


export class LineArrivalsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LineArrivalsPathParams;

  @Metadata()
  queryParams: LineArrivalsQueryParams;
}


export class LineArrivalsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesPrediction })
  tflApiPresentationEntitiesPredictions?: shared.TflApiPresentationEntitiesPrediction[];
}
