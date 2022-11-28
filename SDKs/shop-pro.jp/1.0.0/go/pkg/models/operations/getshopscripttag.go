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

type GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum string

const (
	GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnumShop       GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "shop"
	GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnumThanksPage GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "thanks_page"
)

type GetShopScriptTag200ApplicationJSONScriptTag struct {
	AccountID          *string                                                      `json:"account_id,omitempty"`
	DisplayScope       *GetShopScriptTag200ApplicationJSONScriptTagDisplayScopeEnum `json:"display_scope,omitempty"`
	ID                 *int64                                                       `json:"id,omitempty"`
	Integrity          *string                                                      `json:"integrity,omitempty"`
	MakeDate           *int64                                                       `json:"make_date,omitempty"`
	OauthApplicationID *int64                                                       `json:"oauth_application_id,omitempty"`
	Src                *string                                                      `json:"src,omitempty"`
	UpdateDate         *int64                                                       `json:"update_date,omitempty"`
}

type GetShopScriptTag200ApplicationJSON struct {
	ScriptTag *GetShopScriptTag200ApplicationJSONScriptTag `json:"script_tag,omitempty"`
}

type GetShopScriptTagRequest struct {
	PathParams GetShopScriptTagPathParams
	Security   GetShopScriptTagSecurity
}

type GetShopScriptTagResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetShopScriptTag200ApplicationJSONObject *GetShopScriptTag200ApplicationJSON
}
