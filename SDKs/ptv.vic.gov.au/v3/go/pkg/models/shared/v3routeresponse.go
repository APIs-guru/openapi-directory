package shared



type V3RouteResponse struct {
    Route map[string]interface{} `json:"route,omitempty"`
    Status *V3Status `json:"status,omitempty"`
    
}

