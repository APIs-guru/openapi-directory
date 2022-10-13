package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateShopScriptTagPathParams struct {
	ScriptTagID int64 `pathParam:"style=simple,explode=false,name=scriptTagId"`
}

type UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum string

const (
	UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnumShop       UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum = "shop"
	UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnumThanksPage UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum = "thanks_page"
)

type UpdateShopScriptTagRequestBodyScriptTag struct {
	DisplayScope *UpdateShopScriptTagRequestBodyScriptTagDisplayScopeEnum `json:"display_scope"`
	Integrity    *string                                                  `json:"integrity"`
	Src          *string                                                  `json:"src"`
}

type UpdateShopScriptTagRequestBody struct {
	ScriptTag *UpdateShopScriptTagRequestBodyScriptTag `json:"script_tag"`
}

type UpdateShopScriptTagSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateShopScriptTagRequest struct {
	PathParams UpdateShopScriptTagPathParams
	Request    *UpdateShopScriptTagRequestBody `request:"mediaType=application/json"`
	Security   UpdateShopScriptTagSecurity
}

type UpdateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum string

const (
	UpdateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnumShop       UpdateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "shop"
	UpdateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnumThanksPage UpdateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "thanks_page"
)

type UpdateShopScriptTag200ApplicationJSONScriptTag struct {
	AccountID          *string                                                         `json:"account_id"`
	DisplayScope       *UpdateShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum `json:"display_scope"`
	ID                 *int64                                                          `json:"id"`
	Integrity          *string                                                         `json:"integrity"`
	MakeDate           *int64                                                          `json:"make_date"`
	OauthApplicationID *int64                                                          `json:"oauth_application_id"`
	Src                *string                                                         `json:"src"`
	UpdateDate         *int64                                                          `json:"update_date"`
}

type UpdateShopScriptTag200ApplicationJSON struct {
	ScriptTag *UpdateShopScriptTag200ApplicationJSONScriptTag `json:"script_tag"`
}

type UpdateShopScriptTagResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	UpdateShopScriptTag200ApplicationJSONObject *UpdateShopScriptTag200ApplicationJSON
}
