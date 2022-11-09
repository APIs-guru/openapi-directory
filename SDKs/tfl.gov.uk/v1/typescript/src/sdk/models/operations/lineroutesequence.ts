import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum LineRouteSequenceDirectionEnum {
    Inbound = "inbound"
,    Outbound = "outbound"
,    All = "all"
}


export class LineRouteSequencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=direction" })
  direction: LineRouteSequenceDirectionEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum LineRouteSequenceServiceTypesEnum {
    Regular = "Regular"
,    Night = "Night"
}


export class LineRouteSequenceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=excludeCrowding" })
  excludeCrowding?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=serviceTypes" })
  serviceTypes?: LineRouteSequenceServiceTypesEnum[];
}


export class LineRouteSequenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: LineRouteSequencePathParams;

  @Metadata()
  queryParams: LineRouteSequenceQueryParams;
}


export class LineRouteSequenceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tflApiPresentationEntitiesRouteSequence?: shared.TflApiPresentationEntitiesRouteSequence;
}
