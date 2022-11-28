package shared

// TflAPIPresentationEntitiesStopPointsResponse
// A paged response containing StopPoints
type TflAPIPresentationEntitiesStopPointsResponse struct {
	CentrePoint []float64                             `json:"centrePoint,omitempty"`
	Page        *int32                                `json:"page,omitempty"`
	PageSize    *int32                                `json:"pageSize,omitempty"`
	StopPoints  []TflAPIPresentationEntitiesStopPoint `json:"stopPoints,omitempty"`
	Total       *int32                                `json:"total,omitempty"`
}
