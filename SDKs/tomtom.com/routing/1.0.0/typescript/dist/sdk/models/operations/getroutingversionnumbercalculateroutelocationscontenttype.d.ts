import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams extends SpeakeasyBase {
    contentType: shared.ContentTypeEnum;
    locations: string;
    versionNumber: number;
}
export declare class GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams extends SpeakeasyBase {
    accelerationEfficiency?: number;
    alternativeType?: shared.AlternativeTypeEnum;
    arriveAt?: string;
    auxiliaryPowerInLitersPerHour?: number;
    avoid?: string;
    callback?: string;
    computeBestOrder?: boolean;
    computeTravelTimeFor?: shared.ComputeTravelTimeForEnum;
    constantSpeedConsumptionInLitersPerHundredkm?: string;
    constantSpeedConsumptionInkWhPerHundredkm?: string;
    currentFuelInLiters?: number;
    decelerationEfficiency?: number;
    departAt?: string;
    downhillEfficiency?: number;
    fuelEnergyDensityInMJoulesPerLiter?: number;
    hilliness?: shared.HillinessEnum;
    instructionsType?: shared.InstructionsTypeEnum;
    language?: string;
    maxAlternatives?: number;
    minDeviationDistance?: number;
    minDeviationTime?: number;
    report?: shared.ReportEnum;
    routeRepresentation?: shared.RouteRepresentationEnum;
    routeType?: shared.RouteTypeEnum;
    sectionType?: string;
    traffic?: boolean;
    travelMode?: shared.TravelModeEnum;
    uphillEfficiency?: number;
    vehicleAxleWeight?: number;
    vehicleCommercial?: boolean;
    vehicleEngineType?: shared.VehicleEngineTypeEnum;
    vehicleHeading?: number;
    vehicleHeight?: number;
    vehicleLength?: number;
    vehicleLoadType?: string;
    vehicleMaxSpeed?: number;
    vehicleWeight?: number;
    vehicleWidth?: number;
    windingness?: shared.WindingnessEnum;
}
export declare class GetRoutingVersionNumberCalculateRouteLocationsContentTypeRequest extends SpeakeasyBase {
    pathParams: GetRoutingVersionNumberCalculateRouteLocationsContentTypePathParams;
    queryParams: GetRoutingVersionNumberCalculateRouteLocationsContentTypeQueryParams;
}
export declare class GetRoutingVersionNumberCalculateRouteLocationsContentTypeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
