package shared

import (
	"time"
)

type TflAPIPresentationEntitiesPrediction struct {
	Bearing             *string                                     `json:"bearing,omitempty"`
	CurrentLocation     *string                                     `json:"currentLocation,omitempty"`
	DestinationName     *string                                     `json:"destinationName,omitempty"`
	DestinationNaptanID *string                                     `json:"destinationNaptanId,omitempty"`
	Direction           *string                                     `json:"direction,omitempty"`
	ExpectedArrival     *time.Time                                  `json:"expectedArrival,omitempty"`
	ID                  *string                                     `json:"id,omitempty"`
	LineID              *string                                     `json:"lineId,omitempty"`
	LineName            *string                                     `json:"lineName,omitempty"`
	ModeName            *string                                     `json:"modeName,omitempty"`
	NaptanID            *string                                     `json:"naptanId,omitempty"`
	OperationType       *int32                                      `json:"operationType,omitempty"`
	PlatformName        *string                                     `json:"platformName,omitempty"`
	StationName         *string                                     `json:"stationName,omitempty"`
	TimeToLive          *time.Time                                  `json:"timeToLive,omitempty"`
	TimeToStation       *int32                                      `json:"timeToStation,omitempty"`
	Timestamp           *time.Time                                  `json:"timestamp,omitempty"`
	Timing              *TflAPIPresentationEntitiesPredictionTiming `json:"timing,omitempty"`
	Towards             *string                                     `json:"towards,omitempty"`
	VehicleID           *string                                     `json:"vehicleId,omitempty"`
}
