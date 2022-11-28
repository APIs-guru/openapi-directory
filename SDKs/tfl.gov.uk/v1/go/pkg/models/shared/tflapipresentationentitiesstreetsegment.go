package shared

type TflAPIPresentationEntitiesStreetSegment struct {
	LineString      *string `json:"lineString,omitempty"`
	SourceSystemID  *int64  `json:"sourceSystemId,omitempty"`
	SourceSystemKey *string `json:"sourceSystemKey,omitempty"`
	Toid            *string `json:"toid,omitempty"`
}
