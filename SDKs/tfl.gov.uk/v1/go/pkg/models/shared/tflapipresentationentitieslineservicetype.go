package shared

type TflAPIPresentationEntitiesLineServiceType struct {
	LineName                 *string                                             `json:"lineName"`
	LineSpecificServiceTypes []TflAPIPresentationEntitiesLineSpecificServiceType `json:"lineSpecificServiceTypes"`
}
