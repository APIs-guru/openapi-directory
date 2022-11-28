import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StopPointCrowdingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=line" })
  line: string;
}

export enum StopPointCrowdingDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    All = "all"
}


export class StopPointCrowdingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction: StopPointCrowdingDirectionEnum;
}


export class StopPointCrowdingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StopPointCrowdingPathParams;

  @SpeakeasyMetadata()
  queryParams: StopPointCrowdingQueryParams;
}


export class StopPointCrowdingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TflApiPresentationEntitiesStopPoint })
  tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
