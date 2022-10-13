package shared

type TflAPIPresentationEntitiesLineGroup struct {
	LineIdentifier    []string `json:"lineIdentifier"`
	NaptanIDReference *string  `json:"naptanIdReference"`
	StationAtcoCode   *string  `json:"stationAtcoCode"`
}
