package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateInlineScriptTagPathParams struct {
	InlineScriptTagID int64 `pathParam:"style=simple,explode=false,name=inlineScriptTagId"`
}

type UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum string

const (
	UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnumAll        UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum = "all"
	UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnumThanksPage UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum = "thanks_page"
	UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnumCart       UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum = "cart"
)

type UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum string

const (
	UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnumObjectBuilded UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum = "object_builded"
)

type UpdateInlineScriptTagRequestBodyInlineScriptTag struct {
	DisplayScope *UpdateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum `json:"display_scope,omitempty"`
	Script       *string                                                          `json:"script,omitempty"`
	TriggerEvent *UpdateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum `json:"trigger_event,omitempty"`
}

type UpdateInlineScriptTagRequestBody struct {
	InlineScriptTag *UpdateInlineScriptTagRequestBodyInlineScriptTag `json:"inline_script_tag,omitempty"`
}

type UpdateInlineScriptTagSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type UpdateInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum string

const (
	UpdateInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnumAll        UpdateInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum = "all"
	UpdateInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnumThanksPage UpdateInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum = "thanks_page"
	UpdateInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnumCart       UpdateInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum = "cart"
)

type UpdateInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum string

const (
	UpdateInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnumObjectBuilded UpdateInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum = "object_builded"
)

type UpdateInlineScriptTag200ApplicationJSONInlineScriptTag struct {
	AccountID          *string                                                                 `json:"account_id,omitempty"`
	DisplayScope       *UpdateInlineScriptTag200ApplicationJSONInlineScriptTagDisplayScopeEnum `json:"display_scope,omitempty"`
	ID                 *int64                                                                  `json:"id,omitempty"`
	MakeDate           *int64                                                                  `json:"make_date,omitempty"`
	OauthApplicationID *int64                                                                  `json:"oauth_application_id,omitempty"`
	Script             *string                                                                 `json:"script,omitempty"`
	TriggerEvent       *UpdateInlineScriptTag200ApplicationJSONInlineScriptTagTriggerEventEnum `json:"trigger_event,omitempty"`
	UpdateDate         *int64                                                                  `json:"update_date,omitempty"`
}

type UpdateInlineScriptTag200ApplicationJSON struct {
	InlineScriptTag *UpdateInlineScriptTag200ApplicationJSONInlineScriptTag `json:"inline_script_tag,omitempty"`
}

type UpdateInlineScriptTagRequest struct {
	PathParams UpdateInlineScriptTagPathParams
	Request    *UpdateInlineScriptTagRequestBody `request:"mediaType=application/json"`
	Security   UpdateInlineScriptTagSecurity
}

type UpdateInlineScriptTagResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	UpdateInlineScriptTag200ApplicationJSONObject *UpdateInlineScriptTag200ApplicationJSON
}
