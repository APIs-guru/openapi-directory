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
	DisplayScope *CreateShopScriptTagRequestBodyScriptTagDisplayScopeEnum `json:"display_scope,omitempty"`
	Integrity    *string                                                  `json:"integrity,omitempty"`
	Src          *string                                                  `json:"src,omitempty"`
}

type CreateShopScriptTagRequestBody struct {
	ScriptTag *CreateShopScriptTagRequestBodyScriptTag `json:"script_tag,omitempty"`
}

type CreateShopScriptTagSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum string

const (
	CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnumShop       CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "shop"
	CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnumThanksPage CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "thanks_page"
)

type CreateShopScriptTag200ApplicationJSONScriptTag struct {
	AccountID          *string                                                         `json:"account_id,omitempty"`
	DisplayScope       *CreateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum `json:"display_scope,omitempty"`
	ID                 *int64                                                          `json:"id,omitempty"`
	Integrity          *string                                                         `json:"integrity,omitempty"`
	MakeDate           *int64                                                          `json:"make_date,omitempty"`
	OauthApplicationID *int64                                                          `json:"oauth_application_id,omitempty"`
	Src                *string                                                         `json:"src,omitempty"`
	UpdateDate         *int64                                                          `json:"update_date,omitempty"`
}

type CreateShopScriptTag200ApplicationJSON struct {
	ScriptTag *CreateShopScriptTag200ApplicationJSONScriptTag `json:"script_tag,omitempty"`
}

type CreateShopScriptTagRequest struct {
	Request  *CreateShopScriptTagRequestBody `request:"mediaType=application/json"`
	Security CreateShopScriptTagSecurity
}

type CreateShopScriptTagResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	CreateShopScriptTag200ApplicationJSONObject *CreateShopScriptTag200ApplicationJSON
}
