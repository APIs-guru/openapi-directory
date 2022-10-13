package shared

type TflAPIPresentationEntitiesMatchedStop struct {
	AccessibilitySummary *string                                `json:"accessibilitySummary"`
	Direction            *string                                `json:"direction"`
	HasDisruption        *bool                                  `json:"hasDisruption"`
	IcsID                *string                                `json:"icsId"`
	ID                   *string                                `json:"id"`
	Lat                  *float64                               `json:"lat"`
	Lines                []TflAPIPresentationEntitiesIdentifier `json:"lines"`
	Lon                  *float64                               `json:"lon"`
	Modes                []string                               `json:"modes"`
	Name                 *string                                `json:"name"`
	ParentID             *string                                `json:"parentId"`
	RouteID              *int32                                 `json:"routeId"`
	StationID            *string                                `json:"stationId"`
	Status               *bool                                  `json:"status"`
	StopLetter           *string                                `json:"stopLetter"`
	StopType             *string                                `json:"stopType"`
	TopMostParentID      *string                                `json:"topMostParentId"`
	Towards              *string                                `json:"towards"`
	URL                  *string                                `json:"url"`
	Zone                 *string                                `json:"zone"`
}
