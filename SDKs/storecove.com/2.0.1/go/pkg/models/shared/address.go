package shared



type Address struct {
    City *string `json:"city,omitempty"`
    Country CountryEnum `json:"country"`
    County *string `json:"county,omitempty"`
    Street1 *string `json:"street1,omitempty"`
    Street2 *string `json:"street2,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

