package shared

type LookupsV2PhoneNumber struct {
	CallForwarding       *interface{}                         `json:"call_forwarding"`
	CallerName           *interface{}                         `json:"caller_name"`
	CallingCountryCode   *string                              `json:"calling_country_code"`
	CountryCode          *string                              `json:"country_code"`
	LineTypeIntelligence *interface{}                         `json:"line_type_intelligence"`
	LiveActivity         *interface{}                         `json:"live_activity"`
	NationalFormat       *string                              `json:"national_format"`
	PhoneNumber          *string                              `json:"phone_number"`
	SimSwap              *interface{}                         `json:"sim_swap"`
	URL                  *string                              `json:"url"`
	Valid                *bool                                `json:"valid"`
	ValidationErrors     []PhoneNumberEnumValidationErrorEnum `json:"validation_errors"`
}
