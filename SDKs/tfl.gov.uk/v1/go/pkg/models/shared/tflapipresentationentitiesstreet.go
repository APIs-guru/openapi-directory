package shared

type TflAPIPresentationEntitiesStreet struct {
	Closure         *string                                   `json:"closure,omitempty"`
	Directions      *string                                   `json:"directions,omitempty"`
	Name            *string                                   `json:"name,omitempty"`
	Segments        []TflAPIPresentationEntitiesStreetSegment `json:"segments,omitempty"`
	SourceSystemID  *int64                                    `json:"sourceSystemId,omitempty"`
	SourceSystemKey *string                                   `json:"sourceSystemKey,omitempty"`
}
