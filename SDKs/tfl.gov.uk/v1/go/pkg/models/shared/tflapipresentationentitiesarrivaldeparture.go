package shared

import (
"time")


type TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum string

const (
    TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnumOnTime TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum = "OnTime"
TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnumDelayed TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum = "Delayed"
TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnumCancelled TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum = "Cancelled"
TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnumNotStoppingAtStation TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum = "NotStoppingAtStation"
)


type TflAPIPresentationEntitiesArrivalDeparture struct {
    Cause *string `json:"cause,omitempty"`
    DepartureStatus *TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum `json:"departureStatus,omitempty"`
    DestinationName *string `json:"destinationName,omitempty"`
    DestinationNaptanID *string `json:"destinationNaptanId,omitempty"`
    EstimatedTimeOfArrival *time.Time `json:"estimatedTimeOfArrival,omitempty"`
    EstimatedTimeOfDeparture *time.Time `json:"estimatedTimeOfDeparture,omitempty"`
    MinutesAndSecondsToArrival *string `json:"minutesAndSecondsToArrival,omitempty"`
    MinutesAndSecondsToDeparture *string `json:"minutesAndSecondsToDeparture,omitempty"`
    NaptanID *string `json:"naptanId,omitempty"`
    PlatformName *string `json:"platformName,omitempty"`
    ScheduledTimeOfArrival *time.Time `json:"scheduledTimeOfArrival,omitempty"`
    ScheduledTimeOfDeparture *time.Time `json:"scheduledTimeOfDeparture,omitempty"`
    StationName *string `json:"stationName,omitempty"`
    Timing *TflAPIPresentationEntitiesPredictionTiming `json:"timing,omitempty"`
    
}

