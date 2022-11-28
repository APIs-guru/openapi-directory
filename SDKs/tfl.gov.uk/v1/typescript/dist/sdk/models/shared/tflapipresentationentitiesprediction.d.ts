import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPredictionTiming } from "./tflapipresentationentitiespredictiontiming";
/**
 * DTO to capture the prediction details
**/
export declare class TflApiPresentationEntitiesPrediction extends SpeakeasyBase {
    bearing?: string;
    currentLocation?: string;
    destinationName?: string;
    destinationNaptanId?: string;
    direction?: string;
    expectedArrival?: Date;
    id?: string;
    lineId?: string;
    lineName?: string;
    modeName?: string;
    naptanId?: string;
    operationType?: number;
    platformName?: string;
    stationName?: string;
    timeToLive?: Date;
    timeToStation?: number;
    timestamp?: Date;
    timing?: TflApiPresentationEntitiesPredictionTiming;
    towards?: string;
    vehicleId?: string;
}
