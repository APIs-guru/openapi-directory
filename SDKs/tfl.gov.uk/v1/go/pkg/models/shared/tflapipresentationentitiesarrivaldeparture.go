package shared

import (
	"time"
)

type TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum string

const (
	TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnumOnTime               TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum = "OnTime"
	TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnumDelayed              TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum = "Delayed"
	TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnumCancelled            TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum = "Cancelled"
	TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnumNotStoppingAtStation TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum = "NotStoppingAtStation"
)

type TflAPIPresentationEntitiesArrivalDeparture struct {
	Cause                        *string                                                        `json:"cause"`
	DepartureStatus              *TflAPIPresentationEntitiesArrivalDepartureDepartureStatusEnum `json:"departureStatus"`
	DestinationName              *string                                                        `json:"destinationName"`
	DestinationNaptanID          *string                                                        `json:"destinationNaptanId"`
	EstimatedTimeOfArrival       *time.Time                                                     `json:"estimatedTimeOfArrival"`
	EstimatedTimeOfDeparture     *time.Time                                                     `json:"estimatedTimeOfDeparture"`
	MinutesAndSecondsToArrival   *string                                                        `json:"minutesAndSecondsToArrival"`
	MinutesAndSecondsToDeparture *string                                                        `json:"minutesAndSecondsToDeparture"`
	NaptanID                     *string                                                        `json:"naptanId"`
	PlatformName                 *string                                                        `json:"platformName"`
	ScheduledTimeOfArrival       *time.Time                                                     `json:"scheduledTimeOfArrival"`
	ScheduledTimeOfDeparture     *time.Time                                                     `json:"scheduledTimeOfDeparture"`
	StationName                  *string                                                        `json:"stationName"`
	Timing                       *TflAPIPresentationEntitiesPredictionTiming                    `json:"timing"`
}
