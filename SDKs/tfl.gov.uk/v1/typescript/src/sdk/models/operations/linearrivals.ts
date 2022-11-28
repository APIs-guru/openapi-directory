import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class LineArrivalsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ids" })
  ids: string[];

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=stopPointId" })
  stopPointId: string;
}

export enum LineArrivalsDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    All = "all"
}


export class LineArrivalsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=destinationStationId" })
  destinationStationId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction?: LineArrivalsDirectionEnum;
}


export class LineArrivalsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineArrivalsPathParams;

  @SpeakeasyMetadata()
  queryParams: LineArrivalsQueryParams;
}


export class LineArrivalsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesPrediction })
  tflApiPresentationEntitiesPredictions?: shared.TflApiPresentationEntitiesPrediction[];
}
