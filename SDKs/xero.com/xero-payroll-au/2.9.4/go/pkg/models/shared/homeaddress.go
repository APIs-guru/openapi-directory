package shared



type HomeAddress struct {
    AddressLine1 string `json:"AddressLine1"`
    AddressLine2 *string `json:"AddressLine2,omitempty"`
    City *string `json:"City,omitempty"`
    Country *string `json:"Country,omitempty"`
    PostalCode *string `json:"PostalCode,omitempty"`
    Region *StateEnum `json:"Region,omitempty"`
    
}

