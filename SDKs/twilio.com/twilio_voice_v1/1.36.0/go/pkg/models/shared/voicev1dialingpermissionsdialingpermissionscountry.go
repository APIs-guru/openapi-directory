package shared

type VoiceV1DialingPermissionsDialingPermissionsCountry struct {
	Continent                       *string                `json:"continent,omitempty"`
	CountryCodes                    []string               `json:"country_codes,omitempty"`
	HighRiskSpecialNumbersEnabled   *bool                  `json:"high_risk_special_numbers_enabled,omitempty"`
	HighRiskTollfraudNumbersEnabled *bool                  `json:"high_risk_tollfraud_numbers_enabled,omitempty"`
	IsoCode                         *string                `json:"iso_code,omitempty"`
	Links                           map[string]interface{} `json:"links,omitempty"`
	LowRiskNumbersEnabled           *bool                  `json:"low_risk_numbers_enabled,omitempty"`
	Name                            *string                `json:"name,omitempty"`
	URL                             *string                `json:"url,omitempty"`
}
