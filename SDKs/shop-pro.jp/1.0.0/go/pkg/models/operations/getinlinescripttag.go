package operations

import (
	"openapi/pkg/models/shared"
)

type GetInlineScriptTagPathParams struct {
	InlineScriptTagID int64 `pathParam:"style=simple,explode=false,name=inlineScriptTagId"`
}

type GetInlineScriptTagSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetInlineScriptTagRequest struct {
	PathParams GetInlineScriptTagPathParams
	Security   GetInlineScriptTagSecurity
}

type GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum string

const (
	GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnumAll        GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum = "all"
	GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnumThanksPage GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum = "thanks_page"
	GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnumCart       GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum = "cart"
)

type GetInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum string

const (
	GetInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnumObjectBuilded GetInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum = "object_builded"
)

type GetInlineScriptTag200ApplicationJSONInlineScriptTag struct {
	AccountID          *string                                                              `json:"account_id,omitempty"`
	DisplayScope       *GetInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum `json:"display_scope,omitempty"`
	ID                 *int64                                                               `json:"id,omitempty"`
	MakeDate           *int64                                                               `json:"make_date,omitempty"`
	OauthApplicationID *int64                                                               `json:"oauth_application_id,omitempty"`
	Script             *string                                                              `json:"script,omitempty"`
	TriggerEvent       *GetInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum `json:"trigger_event,omitempty"`
	UpdateDate         *int64                                                               `json:"update_date,omitempty"`
}

type GetInlineScriptTag200ApplicationJSON struct {
	InlineScriptTag *GetInlineScriptTag200ApplicationJSONInlineScriptTag `json:"inline_script_tag,omitempty"`
}

type GetInlineScriptTagResponse struct {
	ContentType                                string
	StatusCode                                 int64
	GetInlineScriptTag200ApplicationJSONObject *GetInlineScriptTag200ApplicationJSON
}
