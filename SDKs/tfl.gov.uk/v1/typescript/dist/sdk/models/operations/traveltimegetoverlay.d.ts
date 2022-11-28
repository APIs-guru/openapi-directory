import { SpeakeasyBase } from "../../../internal/utils";
export declare class TravelTimeGetOverlayPathParams extends SpeakeasyBase {
    height: number;
    mapCenterLat: number;
    mapCenterLon: number;
    pinLat: number;
    pinLon: number;
    width: number;
    z: number;
}
export declare enum TravelTimeGetOverlayDirectionEnum {
    Average = "Average",
    From = "From",
    To = "To"
}
export declare class TravelTimeGetOverlayQueryParams extends SpeakeasyBase {
    direction: TravelTimeGetOverlayDirectionEnum;
    modeId: string;
    scenarioTitle: string;
    timeOfDayId: string;
    travelTimeInterval: number;
}
export declare class TravelTimeGetOverlayRequest extends SpeakeasyBase {
    pathParams: TravelTimeGetOverlayPathParams;
    queryParams: TravelTimeGetOverlayQueryParams;
}
export declare class TravelTimeGetOverlayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
