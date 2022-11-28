import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TflApiPresentationEntitiesPredictionTiming } from "./tflapipresentationentitiespredictiontiming";


export enum TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum {
    OnTime = "OnTime",
    Delayed = "Delayed",
    Cancelled = "Cancelled",
    NotStoppingAtStation = "NotStoppingAtStation"
}


// TflApiPresentationEntitiesArrivalDeparture
/** 
 * DTO to capture the prediction details
**/
export class TflApiPresentationEntitiesArrivalDeparture extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cause" })
  cause?: string;

  @SpeakeasyMetadata({ data: "json, name=departureStatus" })
  departureStatus?: TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @SpeakeasyMetadata({ data: "json, name=destinationNaptanId" })
  destinationNaptanId?: string;

  @SpeakeasyMetadata({ data: "json, name=estimatedTimeOfArrival" })
  estimatedTimeOfArrival?: Date;

  @SpeakeasyMetadata({ data: "json, name=estimatedTimeOfDeparture" })
  estimatedTimeOfDeparture?: Date;

  @SpeakeasyMetadata({ data: "json, name=minutesAndSecondsToArrival" })
  minutesAndSecondsToArrival?: string;

  @SpeakeasyMetadata({ data: "json, name=minutesAndSecondsToDeparture" })
  minutesAndSecondsToDeparture?: string;

  @SpeakeasyMetadata({ data: "json, name=naptanId" })
  naptanId?: string;

  @SpeakeasyMetadata({ data: "json, name=platformName" })
  platformName?: string;

  @SpeakeasyMetadata({ data: "json, name=scheduledTimeOfArrival" })
  scheduledTimeOfArrival?: Date;

  @SpeakeasyMetadata({ data: "json, name=scheduledTimeOfDeparture" })
  scheduledTimeOfDeparture?: Date;

  @SpeakeasyMetadata({ data: "json, name=stationName" })
  stationName?: string;

  @SpeakeasyMetadata({ data: "json, name=timing" })
  timing?: TflApiPresentationEntitiesPredictionTiming;
}
