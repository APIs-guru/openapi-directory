package shared



type PageLinks struct {
    First *string `json:"first,omitempty"`
    Last *string `json:"last,omitempty"`
    Next *string `json:"next,omitempty"`
    Prev *string `json:"prev,omitempty"`
    Related *string `json:"related,omitempty"`
    Self string `json:"self"`
    
}

