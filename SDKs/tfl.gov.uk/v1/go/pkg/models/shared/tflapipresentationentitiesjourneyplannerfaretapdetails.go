package shared

import (
	"time"
)

type TflAPIPresentationEntitiesJourneyPlannerFareTapDetails struct {
	BusRouteID           *string    `json:"busRouteId"`
	HostDeviceType       *string    `json:"hostDeviceType"`
	ModeType             *string    `json:"modeType"`
	NationalLocationCode *int32     `json:"nationalLocationCode"`
	TapTimestamp         *time.Time `json:"tapTimestamp"`
	ValidationType       *string    `json:"validationType"`
}
