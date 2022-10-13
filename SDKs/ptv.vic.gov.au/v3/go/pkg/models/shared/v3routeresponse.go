package shared

type V3RouteResponse struct {
	Route  map[string]interface{} `json:"route"`
	Status *V3Status              `json:"status"`
}
