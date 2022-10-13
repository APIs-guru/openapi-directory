package operations

import (
	"openapi/pkg/models/shared"
)

type CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum string

const (
	CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnumShop       CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum = "shop"
	CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnumThanksPage CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum = "thanks_page"
)

type CreateShopScriptTagRequestBodyScriptTag struct {
	DisplayScope *CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum `json:"display_scope"`
	Integrity    *string                                                  `json:"integrity"`
	Src          *string                                                  `json:"src"`
}

type CreateShopScriptTagRequestBody struct {
	ScriptTag *CreateShopScriptTagRequestBodyScriptTag `json:"script_tag"`
}

type CreateShopScriptTagSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateShopScriptTagRequest struct {
	Request  *CreateShopScriptTagRequestBody `request:"mediaType=application/json"`
	Security CreateShopScriptTagSecurity
}

type CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum string

const (
	CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnumShop       CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "shop"
	CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnumThanksPage CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "thanks_page"
)

type CreateShopScriptTag200ApplicationJSONScriptTag struct {
	AccountID          *string                                                         `json:"account_id"`
	DisplayScope       *CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum `json:"display_scope"`
	ID                 *int64                                                          `json:"id"`
	Integrity          *string                                                         `json:"integrity"`
	MakeDate           *int64                                                          `json:"make_date"`
	OauthApplicationID *int64                                                          `json:"oauth_application_id"`
	Src                *string                                                         `json:"src"`
	UpdateDate         *int64                                                          `json:"update_date"`
}

type CreateShopScriptTag200ApplicationJSON struct {
	ScriptTag *CreateShopScriptTag200ApplicationJSONScriptTag `json:"script_tag"`
}

type CreateShopScriptTagResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	CreateShopScriptTag200ApplicationJSONObject *CreateShopScriptTag200ApplicationJSON
}
