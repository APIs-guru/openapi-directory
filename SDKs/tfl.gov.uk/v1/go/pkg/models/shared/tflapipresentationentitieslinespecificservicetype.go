package shared

type TflAPIPresentationEntitiesLineSpecificServiceType struct {
	ServiceType           *TflAPIPresentationEntitiesLineServiceTypeInfo `json:"serviceType"`
	StopServesServiceType *bool                                          `json:"stopServesServiceType"`
}
