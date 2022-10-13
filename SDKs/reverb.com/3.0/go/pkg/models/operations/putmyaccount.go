package operations

import (
	"openapi/pkg/models/shared"
)

type PutMyAccountRequestBody struct {
	Currency                *string `json:"currency"`
	FirstName               *string `json:"first_name"`
	LastName                *string `json:"last_name"`
	LocaleCode              *string `json:"locale_code"`
	ShippingRegionCode      *string `json:"shipping_region_code"`
	ThirdPartyAdDataConsent *bool   `json:"third_party_ad_data_consent"`
}

type PutMyAccountSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type PutMyAccountRequest struct {
	Request  *PutMyAccountRequestBody `request:"mediaType=application/json"`
	Security PutMyAccountSecurity
}

type PutMyAccountResponse struct {
	ContentType string
	StatusCode  int64
}
