package shared

type TflAPIPresentationEntitiesMatchedStop struct {
	AccessibilitySummary *string                                `json:"accessibilitySummary,omitempty"`
	Direction            *string                                `json:"direction,omitempty"`
	HasDisruption        *bool                                  `json:"hasDisruption,omitempty"`
	IcsID                *string                                `json:"icsId,omitempty"`
	ID                   *string                                `json:"id,omitempty"`
	Lat                  *float64                               `json:"lat,omitempty"`
	Lines                []TflAPIPresentationEntitiesIdentifier `json:"lines,omitempty"`
	Lon                  *float64                               `json:"lon,omitempty"`
	Modes                []string                               `json:"modes,omitempty"`
	Name                 *string                                `json:"name,omitempty"`
	ParentID             *string                                `json:"parentId,omitempty"`
	RouteID              *int32                                 `json:"routeId,omitempty"`
	StationID            *string                                `json:"stationId,omitempty"`
	Status               *bool                                  `json:"status,omitempty"`
	StopLetter           *string                                `json:"stopLetter,omitempty"`
	StopType             *string                                `json:"stopType,omitempty"`
	TopMostParentID      *string                                `json:"topMostParentId,omitempty"`
	Towards              *string                                `json:"towards,omitempty"`
	URL                  *string                                `json:"url,omitempty"`
	Zone                 *string                                `json:"zone,omitempty"`
}
