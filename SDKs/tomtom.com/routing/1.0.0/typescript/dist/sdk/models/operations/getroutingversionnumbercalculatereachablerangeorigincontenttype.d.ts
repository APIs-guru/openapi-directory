import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams extends SpeakeasyBase {
    contentType: shared.ContentTypeEnum;
    origin: string;
    versionNumber: number;
}
export declare enum GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum {
    Combustion = "combustion",
    Electric = "electric"
}
export declare class GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams extends SpeakeasyBase {
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
    vehicleEngineType?: GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeVehicleEngineTypeEnum;
    vehicleHeight?: number;
    vehicleLength?: number;
    vehicleLoadType?: string;
    vehicleMaxSpeed?: number;
    vehicleWeight?: number;
    vehicleWidth?: number;
    windingness?: shared.WindingnessEnum;
}
export declare class GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeRequest extends SpeakeasyBase {
    pathParams: GetRoutingVersionNumberCalculateReachableRangeOriginContentTypePathParams;
    queryParams: GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeQueryParams;
}
export declare class GetRoutingVersionNumberCalculateReachableRangeOriginContentTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
