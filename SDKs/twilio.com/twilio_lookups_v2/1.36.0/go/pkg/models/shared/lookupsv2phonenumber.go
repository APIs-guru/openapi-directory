package shared



type LookupsV2PhoneNumber struct {
    CallForwarding *interface{} `json:"call_forwarding,omitempty"`
    CallerName *interface{} `json:"caller_name,omitempty"`
    CallingCountryCode *string `json:"calling_country_code,omitempty"`
    CountryCode *string `json:"country_code,omitempty"`
    LineTypeIntelligence *interface{} `json:"line_type_intelligence,omitempty"`
    LiveActivity *interface{} `json:"live_activity,omitempty"`
    NationalFormat *string `json:"national_format,omitempty"`
    PhoneNumber *string `json:"phone_number,omitempty"`
    SimSwap *interface{} `json:"sim_swap,omitempty"`
    URL *string `json:"url,omitempty"`
    Valid *bool `json:"valid,omitempty"`
    ValidationErrors []PhoneNumberEnumValidationErrorEnum `json:"validation_errors,omitempty"`
    
}

