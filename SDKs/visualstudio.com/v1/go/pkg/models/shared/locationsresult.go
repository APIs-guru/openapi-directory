package shared



type LocationsResult struct {
    Available []int32 `json:"available,omitempty"`
    Current *int32 `json:"current,omitempty"`
    Hostnames map[string]string `json:"hostnames,omitempty"`
    
}

