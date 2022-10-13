package operations

import (
	"openapi/pkg/models/shared"
)

type GetShopScriptTagPathParams struct {
	ScriptTagID int64 `pathParam:"style=simple,explode=false,name=scriptTagId"`
}

type GetShopScriptTagSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetShopScriptTagRequest struct {
	PathParams GetShopScriptTagPathParams
	Security   GetShopScriptTagSecurity
}

type GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum string

const (
	GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnumShop       GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "shop"
	GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnumThanksPage GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "thanks_page"
)

type GetShopScriptTag200ApplicationJSONScriptTag struct {
	AccountID          *string                                                      `json:"account_id"`
	DisplayScope       *GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum `json:"display_scope"`
	ID                 *int64                                                       `json:"id"`
	Integrity          *string                                                      `json:"integrity"`
	MakeDate           *int64                                                       `json:"make_date"`
	OauthApplicationID *int64                                                       `json:"oauth_application_id"`
	Src                *string                                                      `json:"src"`
	UpdateDate         *int64                                                       `json:"update_date"`
}

type GetShopScriptTag200ApplicationJSON struct {
	ScriptTag *GetShopScriptTag200ApplicationJSONScriptTag `json:"script_tag"`
}

type GetShopScriptTagResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetShopScriptTag200ApplicationJSONObject *GetShopScriptTag200ApplicationJSON
}
