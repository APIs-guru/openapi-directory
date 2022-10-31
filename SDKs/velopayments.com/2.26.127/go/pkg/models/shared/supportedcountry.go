package shared



type SupportedCountry struct {
    Currencies []string `json:"currencies,omitempty"`
    IsoCountryCode *string `json:"isoCountryCode,omitempty"`
    
}

