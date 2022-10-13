package shared

type TflAPIPresentationEntitiesRouteSearchResponse struct {
	Input         *string                                      `json:"input"`
	SearchMatches []TflAPIPresentationEntitiesRouteSearchMatch `json:"searchMatches"`
}
