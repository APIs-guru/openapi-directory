package operations

import (
	"openapi/pkg/models/shared"
)

type GetScriptTagPathParams struct {
	ScriptTagID int64 `pathParam:"style=simple,explode=false,name=scriptTagId"`
}

type GetScriptTagSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetScriptTagRequest struct {
	PathParams GetScriptTagPathParams
	Security   GetScriptTagSecurity
}

type GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum string

const (
	GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnumAll        GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "all"
	GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnumShop       GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "shop"
	GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnumThanksPage GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "thanks_page"
	GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnumCart       GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum = "cart"
)

type GetScriptTag200ApplicationJSONScriptTag struct {
	DisplayScope *GetScriptTag200ApplicationJSONScriptTagDisplayScopeEnum `json:"display_scope"`
	ID           *int64                                                   `json:"id"`
	MakeDate     *int64                                                   `json:"make_date"`
	Src          *string                                                  `json:"src"`
	UpdateDate   *int64                                                   `json:"update_date"`
}

type GetScriptTag200ApplicationJSON struct {
	ScriptTag *GetScriptTag200ApplicationJSONScriptTag `json:"script_tag"`
}

type GetScriptTagResponse struct {
	ContentType                          string
	StatusCode                           int64
	GetScriptTag200ApplicationJSONObject *GetScriptTag200ApplicationJSON
}
