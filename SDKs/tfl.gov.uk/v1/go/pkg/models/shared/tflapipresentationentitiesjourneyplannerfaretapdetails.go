package shared

import (
"time")

type TflAPIPresentationEntitiesJourneyPlannerFareTapDetails struct {
    BusRouteID *string `json:"busRouteId,omitempty"`
    HostDeviceType *string `json:"hostDeviceType,omitempty"`
    ModeType *string `json:"modeType,omitempty"`
    NationalLocationCode *int32 `json:"nationalLocationCode,omitempty"`
    TapTimestamp *time.Time `json:"tapTimestamp,omitempty"`
    ValidationType *string `json:"validationType,omitempty"`
    
}

