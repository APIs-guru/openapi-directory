package shared

type TflAPIPresentationEntitiesRouteSearchResponse struct {
	Input         *string                                      `json:"input,omitempty"`
	SearchMatches []TflAPIPresentationEntitiesRouteSearchMatch `json:"searchMatches,omitempty"`
}
