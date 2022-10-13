package shared

import (
	"time"
)

type TflAPIPresentationEntitiesPrediction struct {
	Bearing             *string                                     `json:"bearing"`
	CurrentLocation     *string                                     `json:"currentLocation"`
	DestinationName     *string                                     `json:"destinationName"`
	DestinationNaptanID *string                                     `json:"destinationNaptanId"`
	Direction           *string                                     `json:"direction"`
	ExpectedArrival     *time.Time                                  `json:"expectedArrival"`
	ID                  *string                                     `json:"id"`
	LineID              *string                                     `json:"lineId"`
	LineName            *string                                     `json:"lineName"`
	ModeName            *string                                     `json:"modeName"`
	NaptanID            *string                                     `json:"naptanId"`
	OperationType       *int32                                      `json:"operationType"`
	PlatformName        *string                                     `json:"platformName"`
	StationName         *string                                     `json:"stationName"`
	TimeToLive          *time.Time                                  `json:"timeToLive"`
	TimeToStation       *int32                                      `json:"timeToStation"`
	Timestamp           *time.Time                                  `json:"timestamp"`
	Timing              *TflAPIPresentationEntitiesPredictionTiming `json:"timing"`
	Towards             *string                                     `json:"towards"`
	VehicleID           *string                                     `json:"vehicleId"`
}
