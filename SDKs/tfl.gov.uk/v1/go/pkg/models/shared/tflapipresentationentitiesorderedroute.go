package shared

type TflAPIPresentationEntitiesOrderedRoute struct {
	Name        *string  `json:"name,omitempty"`
	NaptanIds   []string `json:"naptanIds,omitempty"`
	ServiceType *string  `json:"serviceType,omitempty"`
}
