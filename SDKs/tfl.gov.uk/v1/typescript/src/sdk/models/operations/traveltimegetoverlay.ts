import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TravelTimeGetOverlayPathParams extends SpeakeasyBase {
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

export enum TravelTimeGetOverlayDirectionEnum {
    Average = "Average"
,    From = "From"
,    To = "To"
}


export class TravelTimeGetOverlayQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction: TravelTimeGetOverlayDirectionEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=modeId" })
  modeId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=scenarioTitle" })
  scenarioTitle: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=timeOfDayId" })
  timeOfDayId: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=travelTimeInterval" })
  travelTimeInterval: number;
}


export class TravelTimeGetOverlayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TravelTimeGetOverlayPathParams;

  @Metadata()
  queryParams: TravelTimeGetOverlayQueryParams;
}


export class TravelTimeGetOverlayResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  systemObject?: Map<string, any>;
}
