package operations

import (
	"openapi/pkg/models/shared"
)

type GetInlineScriptTagsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetInlineScriptTagsRequest struct {
	Security GetInlineScriptTagsSecurity
}

type GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum string

const (
	GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnumAll        GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum = "all"
	GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnumThanksPage GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum = "thanks_page"
	GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnumCart       GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum = "cart"
)

type GetInlineScriptTags200ApplicationJSONInlineScriptTagsTriggerEventEnum string

const (
	GetInlineScriptTags200ApplicationJSONInlineScriptTagsTriggerEventEnumObjectBuilded GetInlineScriptTags200ApplicationJSONInlineScriptTagsTriggerEventEnum = "object_builded"
)

type GetInlineScriptTags200ApplicationJSONInlineScriptTags struct {
	AccountID          *string                                                                `json:"account_id"`
	DisplayScope       *GetInlineScriptTags200ApplicationJSONInlineScriptTagsDisplayScopeEnum `json:"display_scope"`
	ID                 *int64                                                                 `json:"id"`
	MakeDate           *int64                                                                 `json:"make_date"`
	OauthApplicationID *int64                                                                 `json:"oauth_application_id"`
	Script             *string                                                                `json:"script"`
	TriggerEvent       *GetInlineScriptTags200ApplicationJSONInlineScriptTagsTriggerEventEnum `json:"trigger_event"`
	UpdateDate         *int64                                                                 `json:"update_date"`
}

type GetInlineScriptTags200ApplicationJSON struct {
	InlineScriptTags []GetInlineScriptTags200ApplicationJSONInlineScriptTags `json:"inline_script_tags"`
}

type GetInlineScriptTagsResponse struct {
	ContentType                                 string
	StatusCode                                  int64
	GetInlineScriptTags200ApplicationJSONObject *GetInlineScriptTags200ApplicationJSON
}
