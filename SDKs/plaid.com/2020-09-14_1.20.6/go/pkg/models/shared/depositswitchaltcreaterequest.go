package shared

type DepositSwitchAltCreateRequestCountryCodeCountryCodeEnum string

const (
	DepositSwitchAltCreateRequestCountryCodeCountryCodeEnumUs DepositSwitchAltCreateRequestCountryCodeCountryCodeEnum = "US"
	DepositSwitchAltCreateRequestCountryCodeCountryCodeEnumCa DepositSwitchAltCreateRequestCountryCodeCountryCodeEnum = "CA"
)

type DepositSwitchAltCreateRequest struct {
	ClientID      *string                                                  `json:"client_id"`
	CountryCode   *DepositSwitchAltCreateRequestCountryCodeCountryCodeEnum `json:"country_code"`
	Options       *DepositSwitchCreateRequestOptions                       `json:"options"`
	Secret        *string                                                  `json:"secret"`
	TargetAccount map[string]interface{}                                   `json:"target_account"`
	TargetUser    map[string]interface{}                                   `json:"target_user"`
}
