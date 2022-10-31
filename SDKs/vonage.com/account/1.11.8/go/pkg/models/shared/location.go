package shared



type Location struct {
    Address *AddressWithTimeZone `json:"address,omitempty"`
    ID *float64 `json:"id,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

