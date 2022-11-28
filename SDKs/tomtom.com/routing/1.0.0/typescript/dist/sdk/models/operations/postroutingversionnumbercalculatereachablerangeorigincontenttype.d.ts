import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams extends SpeakeasyBase {
    contentType: shared.ContentTypeEnum;
    origin: string;
    versionNumber: number;
}
export declare enum PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum {
    Combustion = "combustion",
    Electric = "electric"
}
export declare class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams extends SpeakeasyBase {
    accelerationEfficiency?: number;
    arriveAt?: string;
    auxiliaryPowerInLitersPerHour?: number;
    avoid?: string;
    callback?: string;
    constantSpeedConsumptionInLitersPerHundredkm?: string;
    constantSpeedConsumptionInkWhPerHundredkm?: string;
    currentFuelInLiters?: number;
    decelerationEfficiency?: number;
    departAt?: string;
    downhillEfficiency?: number;
    energyBudgetInkWh?: number;
    fuelBudgetInLiters?: number;
    fuelEnergyDensityInMJoulesPerLiter?: number;
    hilliness?: shared.HillinessEnum;
    report?: shared.ReportEnum;
    routeType?: shared.RouteTypeEnum;
    timeBudgetInSec?: number;
    traffic?: boolean;
    travelMode?: shared.TravelModeEnum;
    uphillEfficiency?: number;
    vehicleAxleWeight?: number;
    vehicleCommercial?: boolean;
    vehicleEngineType?: PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum;
    vehicleHeight?: number;
    vehicleLength?: number;
    vehicleLoadType?: string;
    vehicleMaxSpeed?: number;
    vehicleWeight?: number;
    vehicleWidth?: number;
    windingness?: shared.WindingnessEnum;
}
export declare class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests extends SpeakeasyBase {
    applicationXml: Uint8Array;
    calculateReachableRangePostDataParameters?: shared.CalculateReachableRangePostDataParameters;
}
export declare class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest extends SpeakeasyBase {
    pathParams: PostRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams;
    queryParams: PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams;
    request?: PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequests;
}
export declare class PostRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
