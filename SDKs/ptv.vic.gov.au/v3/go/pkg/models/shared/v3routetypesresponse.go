package shared

type V3RouteTypesResponse struct {
	RouteTypes []V3RouteType `json:"route_types,omitempty"`
	Status     *V3Status     `json:"status,omitempty"`
}
