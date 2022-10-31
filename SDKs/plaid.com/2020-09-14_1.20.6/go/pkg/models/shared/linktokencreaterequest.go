package shared



type LinkTokenCreateRequest struct {
    AccessToken *string `json:"access_token,omitempty"`
    AccountFilters map[string]interface{} `json:"account_filters,omitempty"`
    AndroidPackageName *string `json:"android_package_name,omitempty"`
    Auth *LinkTokenCreateRequestAuth `json:"auth,omitempty"`
    ClientID *string `json:"client_id,omitempty"`
    ClientName string `json:"client_name"`
    CountryCodes []CountryCodeEnum `json:"country_codes"`
    DepositSwitch *LinkTokenCreateRequestDepositSwitch `json:"deposit_switch,omitempty"`
    EuConfig *LinkTokenEuConfig `json:"eu_config,omitempty"`
    IncomeVerification *LinkTokenCreateRequestIncomeVerification `json:"income_verification,omitempty"`
    InstitutionID *string `json:"institution_id,omitempty"`
    Language string `json:"language"`
    LinkCustomizationName *string `json:"link_customization_name,omitempty"`
    PaymentInitiation *LinkTokenCreateRequestPaymentInitiation `json:"payment_initiation,omitempty"`
    Products []ProductsEnum `json:"products,omitempty"`
    RedirectURI *string `json:"redirect_uri,omitempty"`
    Secret *string `json:"secret,omitempty"`
    User LinkTokenCreateRequestUser `json:"user"`
    Webhook *string `json:"webhook,omitempty"`
    
}

