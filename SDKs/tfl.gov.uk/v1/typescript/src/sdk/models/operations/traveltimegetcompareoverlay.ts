import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TravelTimeGetCompareOverlayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=height" })
  height: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mapCenterLat" })
  mapCenterLat: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=mapCenterLon" })
  mapCenterLon: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pinLat" })
  pinLat: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=pinLon" })
  pinLon: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=width" })
  width: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=z" })
  z: number;
}

export enum TravelTimeGetCompareOverlayDirectionEnum {
    Average = "Average"
,    From = "From"
,    To = "To"
}


export class TravelTimeGetCompareOverlayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=compareType" })
  compareType: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=compareValue" })
  compareValue: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction: TravelTimeGetCompareOverlayDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modeId" })
  modeId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scenarioTitle" })
  scenarioTitle: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeOfDayId" })
  timeOfDayId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travelTimeInterval" })
  travelTimeInterval: number;
}


export class TravelTimeGetCompareOverlayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TravelTimeGetCompareOverlayPathParams;

  @Metadata()
  queryParams: TravelTimeGetCompareOverlayQueryParams;
}


export class TravelTimeGetCompareOverlayResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
