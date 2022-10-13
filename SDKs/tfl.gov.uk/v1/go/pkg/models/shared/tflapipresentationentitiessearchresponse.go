package shared

type TflAPIPresentationEntitiesSearchResponse struct {
	From     *int32                                  `json:"from"`
	Matches  []TflAPIPresentationEntitiesSearchMatch `json:"matches"`
	MaxScore *float64                                `json:"maxScore"`
	Page     *int32                                  `json:"page"`
	PageSize *int32                                  `json:"pageSize"`
	Provider *string                                 `json:"provider"`
	Query    *string                                 `json:"query"`
	Total    *int32                                  `json:"total"`
}
