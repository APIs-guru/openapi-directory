package shared

type VoiceV1DialingPermissionsDialingPermissionsCountry struct {
	Continent                       *string                `json:"continent"`
	CountryCodes                    []string               `json:"country_codes"`
	HighRiskSpecialNumbersEnabled   *bool                  `json:"high_risk_special_numbers_enabled"`
	HighRiskTollfraudNumbersEnabled *bool                  `json:"high_risk_tollfraud_numbers_enabled"`
	IsoCode                         *string                `json:"iso_code"`
	Links                           map[string]interface{} `json:"links"`
	LowRiskNumbersEnabled           *bool                  `json:"low_risk_numbers_enabled"`
	Name                            *string                `json:"name"`
	URL                             *string                `json:"url"`
}
