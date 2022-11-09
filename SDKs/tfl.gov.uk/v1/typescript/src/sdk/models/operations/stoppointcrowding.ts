import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StopPointCrowdingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=line" })
  line: string;
}

export enum StopPointCrowdingDirectionEnum {
    Inbound = "inbound"
,    Outbound = "outbound"
,    All = "all"
}


export class StopPointCrowdingQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction: StopPointCrowdingDirectionEnum;
}


export class StopPointCrowdingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StopPointCrowdingPathParams;

  @Metadata()
  queryParams: StopPointCrowdingQueryParams;
}


export class StopPointCrowdingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TflApiPresentationEntitiesStopPoint })
  tflApiPresentationEntitiesStopPoints?: shared.TflApiPresentationEntitiesStopPoint[];
}
