import { SpeakeasyBase } from "../../../internal/utils";
export declare class TravelTimeGetCompareOverlayPathParams extends SpeakeasyBase {
    height: number;
    mapCenterLat: number;
    mapCenterLon: number;
    pinLat: number;
    pinLon: number;
    width: number;
    z: number;
}
export declare enum TravelTimeGetCompareOverlayDirectionEnum {
    Average = "Average",
    From = "From",
    To = "To"
}
export declare class TravelTimeGetCompareOverlayQueryParams extends SpeakeasyBase {
    compareType: string;
    compareValue: string;
    direction: TravelTimeGetCompareOverlayDirectionEnum;
    modeId: string;
    scenarioTitle: string;
    timeOfDayId: string;
    travelTimeInterval: number;
}
export declare class TravelTimeGetCompareOverlayRequest extends SpeakeasyBase {
    pathParams: TravelTimeGetCompareOverlayPathParams;
    queryParams: TravelTimeGetCompareOverlayQueryParams;
}
export declare class TravelTimeGetCompareOverlayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
