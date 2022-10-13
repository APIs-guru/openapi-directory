package shared

type TflAPIPresentationEntitiesRouteSequence struct {
	Direction          *string                                       `json:"direction"`
	IsOutboundOnly     *bool                                         `json:"isOutboundOnly"`
	LineID             *string                                       `json:"lineId"`
	LineName           *string                                       `json:"lineName"`
	LineStrings        []string                                      `json:"lineStrings"`
	Mode               *string                                       `json:"mode"`
	OrderedLineRoutes  []TflAPIPresentationEntitiesOrderedRoute      `json:"orderedLineRoutes"`
	Stations           []TflAPIPresentationEntitiesMatchedStop       `json:"stations"`
	StopPointSequences []TflAPIPresentationEntitiesStopPointSequence `json:"stopPointSequences"`
}
