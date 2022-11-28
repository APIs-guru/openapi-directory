import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TravelTimeGetCompareOverlayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=height" })
  height: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapCenterLat" })
  mapCenterLat: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mapCenterLon" })
  mapCenterLon: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pinLat" })
  pinLat: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pinLon" })
  pinLon: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=width" })
  width: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=z" })
  z: number;
}

export enum TravelTimeGetCompareOverlayDirectionEnum {
    Average = "Average",
    From = "From",
    To = "To"
}


export class TravelTimeGetCompareOverlayQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=compareType" })
  compareType: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=compareValue" })
  compareValue: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direction" })
  direction: TravelTimeGetCompareOverlayDirectionEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=modeId" })
  modeId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=scenarioTitle" })
  scenarioTitle: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=timeOfDayId" })
  timeOfDayId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=travelTimeInterval" })
  travelTimeInterval: number;
}


export class TravelTimeGetCompareOverlayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TravelTimeGetCompareOverlayPathParams;

  @SpeakeasyMetadata()
  queryParams: TravelTimeGetCompareOverlayQueryParams;
}


export class TravelTimeGetCompareOverlayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  systemObject?: Map<string, any>;
}
