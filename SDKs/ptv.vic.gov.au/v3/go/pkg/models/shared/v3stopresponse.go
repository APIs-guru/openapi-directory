package shared



type V3StopResponse struct {
    Disruptions map[string]V3Disruption `json:"disruptions,omitempty"`
    Status *V3Status `json:"status,omitempty"`
    Stop *V3StopDetails `json:"stop,omitempty"`
    
}

