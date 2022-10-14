package shared

type DepositSwitchAltCreateRequestCountryCodeCountryCodeEnum string

const (
	DepositSwitchAltCreateRequestCountryCodeCountryCodeEnumUs DepositSwitchAltCreateRequestCountryCodeCountryCodeEnum = "US"
	DepositSwitchAltCreateRequestCountryCodeCountryCodeEnumCa DepositSwitchAltCreateRequestCountryCodeCountryCodeEnum = "CA"
)

type DepositSwitchAltCreateRequest struct {
	ClientID      *string                                                  `json:"client_id,omitempty"`
	CountryCode   *DepositSwitchAltCreateRequestCountryCodeCountryCodeEnum `json:"country_code,omitempty"`
	Options       *DepositSwitchCreateRequestOptions                       `json:"options,omitempty"`
	Secret        *string                                                  `json:"secret,omitempty"`
	TargetAccount map[string]interface{}                                   `json:"target_account"`
	TargetUser    map[string]interface{}                                   `json:"target_user"`
}
