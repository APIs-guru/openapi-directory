package operations

import (
	"openapi/pkg/models/shared"
)

type GetScriptTagsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetScriptTagsRequest struct {
	Security GetScriptTagsSecurity
}

type GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum string

const (
	GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnumAll        GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum = "all"
	GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnumShop       GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum = "shop"
	GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnumThanksPage GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum = "thanks_page"
	GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnumCart       GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum = "cart"
)

type GetScriptTags200ApplicationJSONScriptTags struct {
	DisplayScope *GetScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum `json:"display_scope"`
	ID           *int64                                                     `json:"id"`
	MakeDate     *int64                                                     `json:"make_date"`
	Src          *string                                                    `json:"src"`
	UpdateDate   *int64                                                     `json:"update_date"`
}

type GetScriptTags200ApplicationJSON struct {
	ScriptTags []GetScriptTags200ApplicationJSONScriptTags `json:"script_tags"`
}

type GetScriptTagsResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetScriptTags200ApplicationJSONObject *GetScriptTags200ApplicationJSON
}
