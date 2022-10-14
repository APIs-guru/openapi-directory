package shared

type DepositSwitchCreateRequestCountryCodeCountryCodeEnum string

const (
	DepositSwitchCreateRequestCountryCodeCountryCodeEnumUs DepositSwitchCreateRequestCountryCodeCountryCodeEnum = "US"
	DepositSwitchCreateRequestCountryCodeCountryCodeEnumCa DepositSwitchCreateRequestCountryCodeCountryCodeEnum = "CA"
)

type DepositSwitchCreateRequest struct {
	ClientID          *string                                               `json:"client_id,omitempty"`
	CountryCode       *DepositSwitchCreateRequestCountryCodeCountryCodeEnum `json:"country_code,omitempty"`
	Options           *DepositSwitchCreateRequestOptions                    `json:"options,omitempty"`
	Secret            *string                                               `json:"secret,omitempty"`
	TargetAccessToken string                                                `json:"target_access_token"`
	TargetAccountID   string                                                `json:"target_account_id"`
}
