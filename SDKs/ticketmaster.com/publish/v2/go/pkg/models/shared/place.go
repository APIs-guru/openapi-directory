package shared



type Place struct {
    Address *Address `json:"address,omitempty"`
    Area *Area `json:"area,omitempty"`
    City *City `json:"city,omitempty"`
    Country *Country `json:"country,omitempty"`
    Location *Location `json:"location,omitempty"`
    Names map[string]string `json:"names,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    State *State `json:"state,omitempty"`
    
}

