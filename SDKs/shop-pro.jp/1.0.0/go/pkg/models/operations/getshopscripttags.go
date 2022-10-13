package operations

import (
	"openapi/pkg/models/shared"
)

type GetShopScriptTagsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetShopScriptTagsRequest struct {
	Security GetShopScriptTagsSecurity
}

type GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum string

const (
	GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnumShop       GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum = "shop"
	GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnumThanksPage GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum = "thanks_page"
)

type GetShopScriptTags200ApplicationJSONScriptTags struct {
	AccountID          *string                                                        `json:"account_id"`
	DisplayScope       *GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum `json:"display_scope"`
	ID                 *int64                                                         `json:"id"`
	Integrity          *string                                                        `json:"integrity"`
	MakeDate           *int64                                                         `json:"make_date"`
	OauthApplicationID *int64                                                         `json:"oauth_application_id"`
	Src                *string                                                        `json:"src"`
	UpdateDate         *int64                                                         `json:"update_date"`
}

type GetShopScriptTags200ApplicationJSON struct {
	ScriptTags []GetShopScriptTags200ApplicationJSONScriptTags `json:"script_tags"`
}

type GetShopScriptTagsResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetShopScriptTags200ApplicationJSONObject *GetShopScriptTags200ApplicationJSON
}
