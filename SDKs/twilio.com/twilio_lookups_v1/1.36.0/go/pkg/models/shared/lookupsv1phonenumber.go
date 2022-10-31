package shared



type LookupsV1PhoneNumber struct {
    AddOns *interface{} `json:"add_ons,omitempty"`
    CallerName *interface{} `json:"caller_name,omitempty"`
    Carrier *interface{} `json:"carrier,omitempty"`
    CountryCode *string `json:"country_code,omitempty"`
    NationalFormat *string `json:"national_format,omitempty"`
    PhoneNumber *string `json:"phone_number,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

