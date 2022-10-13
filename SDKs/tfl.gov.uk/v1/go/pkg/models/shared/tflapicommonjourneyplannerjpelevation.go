package shared

type TflAPICommonJourneyPlannerJpElevation struct {
	Distance                *int32   `json:"distance"`
	EndLat                  *float64 `json:"endLat"`
	EndLon                  *float64 `json:"endLon"`
	Gradient                *float64 `json:"gradient"`
	HeightFromPreviousPoint *int32   `json:"heightFromPreviousPoint"`
	StartLat                *float64 `json:"startLat"`
	StartLon                *float64 `json:"startLon"`
}
