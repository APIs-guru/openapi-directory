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
	AccountID          *string                                                        `json:"account_id,omitempty"`
	DisplayScope       *GetShopScriptTags200ApplicationJSONScriptTagsDisplayScopeEnum `json:"display_scope,omitempty"`
	ID                 *int64                                                         `json:"id,omitempty"`
	Integrity          *string                                                        `json:"integrity,omitempty"`
	MakeDate           *int64                                                         `json:"make_date,omitempty"`
	OauthApplicationID *int64                                                         `json:"oauth_application_id,omitempty"`
	Src                *string                                                        `json:"src,omitempty"`
	UpdateDate         *int64                                                         `json:"update_date,omitempty"`
}

type GetShopScriptTags200ApplicationJSON struct {
	ScriptTags []GetShopScriptTags200ApplicationJSONScriptTags `json:"script_tags,omitempty"`
}

type GetShopScriptTagsResponse struct {
	ContentType                               string
	StatusCode                                int64
	GetShopScriptTags200ApplicationJSONObject *GetShopScriptTags200ApplicationJSON
}
