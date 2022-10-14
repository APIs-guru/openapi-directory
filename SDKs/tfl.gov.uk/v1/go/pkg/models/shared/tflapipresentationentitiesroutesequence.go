package shared

type TflAPIPresentationEntitiesRouteSequence struct {
	Direction          *string                                       `json:"direction,omitempty"`
	IsOutboundOnly     *bool                                         `json:"isOutboundOnly,omitempty"`
	LineID             *string                                       `json:"lineId,omitempty"`
	LineName           *string                                       `json:"lineName,omitempty"`
	LineStrings        []string                                      `json:"lineStrings,omitempty"`
	Mode               *string                                       `json:"mode,omitempty"`
	OrderedLineRoutes  []TflAPIPresentationEntitiesOrderedRoute      `json:"orderedLineRoutes,omitempty"`
	Stations           []TflAPIPresentationEntitiesMatchedStop       `json:"stations,omitempty"`
	StopPointSequences []TflAPIPresentationEntitiesStopPointSequence `json:"stopPointSequences,omitempty"`
}
