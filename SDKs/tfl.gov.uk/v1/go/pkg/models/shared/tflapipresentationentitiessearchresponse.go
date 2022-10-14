package shared

type TflAPIPresentationEntitiesSearchResponse struct {
	From     *int32                                  `json:"from,omitempty"`
	Matches  []TflAPIPresentationEntitiesSearchMatch `json:"matches,omitempty"`
	MaxScore *float64                                `json:"maxScore,omitempty"`
	Page     *int32                                  `json:"page,omitempty"`
	PageSize *int32                                  `json:"pageSize,omitempty"`
	Provider *string                                 `json:"provider,omitempty"`
	Query    *string                                 `json:"query,omitempty"`
	Total    *int32                                  `json:"total,omitempty"`
}
