import { SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPredictionTiming } from "./tflapipresentationentitiespredictiontiming";
export declare enum TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum {
    OnTime = "OnTime",
    Delayed = "Delayed",
    Cancelled = "Cancelled",
    NotStoppingAtStation = "NotStoppingAtStation"
}
/**
 * DTO to capture the prediction details
**/
export declare class TflApiPresentationEntitiesArrivalDeparture extends SpeakeasyBase {
    cause?: string;
    departureStatus?: TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum;
    destinationName?: string;
    destinationNaptanId?: string;
    estimatedTimeOfArrival?: Date;
    estimatedTimeOfDeparture?: Date;
    minutesAndSecondsToArrival?: string;
    minutesAndSecondsToDeparture?: string;
    naptanId?: string;
    platformName?: string;
    scheduledTimeOfArrival?: Date;
    scheduledTimeOfDeparture?: Date;
    stationName?: string;
    timing?: TflApiPresentationEntitiesPredictionTiming;
}
