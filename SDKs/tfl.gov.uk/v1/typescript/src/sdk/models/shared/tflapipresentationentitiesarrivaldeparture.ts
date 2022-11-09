import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TflApiPresentationEntitiesPredictionTiming } from "./tflapipresentationentitiespredictiontiming";

export enum TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum {
    OnTime = "OnTime"
,    Delayed = "Delayed"
,    Cancelled = "Cancelled"
,    NotStoppingAtStation = "NotStoppingAtStation"
}


// TflApiPresentationEntitiesArrivalDeparture
/** 
 * DTO to capture the prediction details
**/
export class TflApiPresentationEntitiesArrivalDeparture extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=departureStatus" })
  departureStatus?: TflApiPresentationEntitiesArrivalDepartureDepartureStatusEnum;

  @Metadata({ data: "json, name=destinationName" })
  destinationName?: string;

  @Metadata({ data: "json, name=destinationNaptanId" })
  destinationNaptanId?: string;

  @Metadata({ data: "json, name=estimatedTimeOfArrival" })
  estimatedTimeOfArrival?: Date;

  @Metadata({ data: "json, name=estimatedTimeOfDeparture" })
  estimatedTimeOfDeparture?: Date;

  @Metadata({ data: "json, name=minutesAndSecondsToArrival" })
  minutesAndSecondsToArrival?: string;

  @Metadata({ data: "json, name=minutesAndSecondsToDeparture" })
  minutesAndSecondsToDeparture?: string;

  @Metadata({ data: "json, name=naptanId" })
  naptanId?: string;

  @Metadata({ data: "json, name=platformName" })
  platformName?: string;

  @Metadata({ data: "json, name=scheduledTimeOfArrival" })
  scheduledTimeOfArrival?: Date;

  @Metadata({ data: "json, name=scheduledTimeOfDeparture" })
  scheduledTimeOfDeparture?: Date;

  @Metadata({ data: "json, name=stationName" })
  stationName?: string;

  @Metadata({ data: "json, name=timing" })
  timing?: TflApiPresentationEntitiesPredictionTiming;
}
