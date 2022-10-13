package shared

type TflAPIPresentationEntitiesOrderedRoute struct {
	Name        *string  `json:"name"`
	NaptanIds   []string `json:"naptanIds"`
	ServiceType *string  `json:"serviceType"`
}
