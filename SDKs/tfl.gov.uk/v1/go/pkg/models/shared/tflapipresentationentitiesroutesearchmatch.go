package shared

type TflAPIPresentationEntitiesRouteSearchMatch struct {
	ID                   *string                                          `json:"id"`
	Lat                  *float64                                         `json:"lat"`
	LineID               *string                                          `json:"lineId"`
	LineName             *string                                          `json:"lineName"`
	LineRouteSection     []TflAPIPresentationEntitiesLineRouteSection     `json:"lineRouteSection"`
	Lon                  *float64                                         `json:"lon"`
	MatchedRouteSections []TflAPIPresentationEntitiesMatchedRouteSections `json:"matchedRouteSections"`
	MatchedStops         []TflAPIPresentationEntitiesMatchedStop          `json:"matchedStops"`
	Mode                 *string                                          `json:"mode"`
	Name                 *string                                          `json:"name"`
	URL                  *string                                          `json:"url"`
}
