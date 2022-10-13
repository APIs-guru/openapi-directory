package shared

type LinkTokenCreateRequest struct {
	AccessToken           *string                                   `json:"access_token"`
	AccountFilters        map[string]interface{}                    `json:"account_filters"`
	AndroidPackageName    *string                                   `json:"android_package_name"`
	Auth                  *LinkTokenCreateRequestAuth               `json:"auth"`
	ClientID              *string                                   `json:"client_id"`
	ClientName            string                                    `json:"client_name"`
	CountryCodes          []CountryCodeEnum                         `json:"country_codes"`
	DepositSwitch         *LinkTokenCreateRequestDepositSwitch      `json:"deposit_switch"`
	EuConfig              *LinkTokenEuConfig                        `json:"eu_config"`
	IncomeVerification    *LinkTokenCreateRequestIncomeVerification `json:"income_verification"`
	InstitutionID         *string                                   `json:"institution_id"`
	Language              string                                    `json:"language"`
	LinkCustomizationName *string                                   `json:"link_customization_name"`
	PaymentInitiation     *LinkTokenCreateRequestPaymentInitiation  `json:"payment_initiation"`
	Products              []ProductsEnum                            `json:"products"`
	RedirectURI           *string                                   `json:"redirect_uri"`
	Secret                *string                                   `json:"secret"`
	User                  LinkTokenCreateRequestUser                `json:"user"`
	Webhook               *string                                   `json:"webhook"`
}
