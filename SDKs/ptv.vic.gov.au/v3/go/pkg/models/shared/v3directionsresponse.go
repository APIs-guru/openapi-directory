package shared



type V3DirectionsResponse struct {
    Directions []V3DirectionWithDescription `json:"directions,omitempty"`
    Status *V3Status `json:"status,omitempty"`
    
}

