import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum LineRouteSequenceDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    All = "all"
}


export class LineRouteSequencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=direction" })
  direction: LineRouteSequenceDirectionEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum LineRouteSequenceServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}


export class LineRouteSequenceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=excludeCrowding" })
  excludeCrowding?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: LineRouteSequenceServiceTypesEnum[];
}


export class LineRouteSequenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: LineRouteSequencePathParams;

  @SpeakeasyMetadata()
  queryParams: LineRouteSequenceQueryParams;
}


export class LineRouteSequenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesRouteSequence?: shared.TflApiPresentationEntitiesRouteSequence;
}
