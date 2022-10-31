package shared

type DepositSwitchAltCreateRequestCountryCodeEnum string

const (
	DepositSwitchAltCreateRequestCountryCodeEnumUs DepositSwitchAltCreateRequestCountryCodeEnum = "US"
	DepositSwitchAltCreateRequestCountryCodeEnumCa DepositSwitchAltCreateRequestCountryCodeEnum = "CA"
)

type DepositSwitchAltCreateRequest struct {
	ClientID      *string                                       `json:"client_id,omitempty"`
	CountryCode   *DepositSwitchAltCreateRequestCountryCodeEnum `json:"country_code,omitempty"`
	Options       *DepositSwitchCreateRequestOptions            `json:"options,omitempty"`
	Secret        *string                                       `json:"secret,omitempty"`
	TargetAccount map[string]interface{}                        `json:"target_account"`
	TargetUser    map[string]interface{}                        `json:"target_user"`
}
