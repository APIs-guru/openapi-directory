package shared

type DepositSwitchCreateRequestCountryCodeCountryCodeEnum string

const (
	DepositSwitchCreateRequestCountryCodeCountryCodeEnumUs DepositSwitchCreateRequestCountryCodeCountryCodeEnum = "US"
	DepositSwitchCreateRequestCountryCodeCountryCodeEnumCa DepositSwitchCreateRequestCountryCodeCountryCodeEnum = "CA"
)

type DepositSwitchCreateRequest struct {
	ClientID          *string                                               `json:"client_id"`
	CountryCode       *DepositSwitchCreateRequestCountryCodeCountryCodeEnum `json:"country_code"`
	Options           *DepositSwitchCreateRequestOptions                    `json:"options"`
	Secret            *string                                               `json:"secret"`
	TargetAccessToken string                                                `json:"target_access_token"`
	TargetAccountID   string                                                `json:"target_account_id"`
}
