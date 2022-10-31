package shared

type TflAPIPresentationEntitiesLineServiceType struct {
	LineName                 *string                                             `json:"lineName,omitempty"`
	LineSpecificServiceTypes []TflAPIPresentationEntitiesLineSpecificServiceType `json:"lineSpecificServiceTypes,omitempty"`
}
