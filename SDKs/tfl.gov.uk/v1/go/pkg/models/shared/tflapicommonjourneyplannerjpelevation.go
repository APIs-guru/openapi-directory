package shared



type TflAPICommonJourneyPlannerJpElevation struct {
    Distance *int32 `json:"distance,omitempty"`
    EndLat *float64 `json:"endLat,omitempty"`
    EndLon *float64 `json:"endLon,omitempty"`
    Gradient *float64 `json:"gradient,omitempty"`
    HeightFromPreviousPoint *int32 `json:"heightFromPreviousPoint,omitempty"`
    StartLat *float64 `json:"startLat,omitempty"`
    StartLon *float64 `json:"startLon,omitempty"`
    
}

