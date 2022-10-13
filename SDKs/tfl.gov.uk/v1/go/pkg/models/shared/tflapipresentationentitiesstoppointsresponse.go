package shared

type TflAPIPresentationEntitiesStopPointsResponse struct {
	CentrePoint []float64                             `json:"centrePoint"`
	Page        *int32                                `json:"page"`
	PageSize    *int32                                `json:"pageSize"`
	StopPoints  []TflAPIPresentationEntitiesStopPoint `json:"stopPoints"`
	Total       *int32                                `json:"total"`
}
