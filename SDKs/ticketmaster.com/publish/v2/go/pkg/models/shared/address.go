package shared



type Address struct {
    Line1s map[string]string `json:"line1s,omitempty"`
    Line2s map[string]string `json:"line2s,omitempty"`
    Line3s map[string]string `json:"line3s,omitempty"`
    
}

