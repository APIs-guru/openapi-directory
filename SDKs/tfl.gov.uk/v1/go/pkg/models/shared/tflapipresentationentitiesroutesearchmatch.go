package shared

type TflAPIPresentationEntitiesRouteSearchMatch struct {
	ID                   *string                                          `json:"id,omitempty"`
	Lat                  *float64                                         `json:"lat,omitempty"`
	LineID               *string                                          `json:"lineId,omitempty"`
	LineName             *string                                          `json:"lineName,omitempty"`
	LineRouteSection     []TflAPIPresentationEntitiesLineRouteSection     `json:"lineRouteSection,omitempty"`
	Lon                  *float64                                         `json:"lon,omitempty"`
	MatchedRouteSections []TflAPIPresentationEntitiesMatchedRouteSections `json:"matchedRouteSections,omitempty"`
	MatchedStops         []TflAPIPresentationEntitiesMatchedStop          `json:"matchedStops,omitempty"`
	Mode                 *string                                          `json:"mode,omitempty"`
	Name                 *string                                          `json:"name,omitempty"`
	URL                  *string                                          `json:"url,omitempty"`
}
