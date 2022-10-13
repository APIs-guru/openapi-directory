package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum string

const (
	CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnumAll        CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum = "all"
	CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnumThanksPage CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum = "thanks_page"
	CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnumCart       CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum = "cart"
)

type CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum string

const (
	CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnumObjectBuilded CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum = "object_builded"
)

type CreateInlineScriptTagRequestBodyInlineScriptTag struct {
	DisplayScope *CreateInlineScriptTagRequestBodyInlineScriptTagDisplayScopeEnum `json:"display_scope"`
	Script       *string                                                          `json:"script"`
	TriggerEvent *CreateInlineScriptTagRequestBodyInlineScriptTagTriggerEventEnum `json:"trigger_event"`
}

type CreateInlineScriptTagRequestBody struct {
	InlineScriptTag *CreateInlineScriptTagRequestBodyInlineScriptTag `json:"inline_script_tag"`
}

type CreateInlineScriptTagSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type CreateInlineScriptTagRequest struct {
	Request  *CreateInlineScriptTagRequestBody `request:"mediaType=application/json"`
	Security CreateInlineScriptTagSecurity
}

type CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnum string

const (
	CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnumAll        CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnum = "all"
	CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnumThanksPage CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnum = "thanks_page"
	CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnumCart       CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnum = "cart"
)

type CreateInlineScriptTag201ApplicationJSONInlineScriptTagTriggerEventEnum string

const (
	CreateInlineScriptTag201ApplicationJSONInlineScriptTagTriggerEventEnumObjectBuilded CreateInlineScriptTag201ApplicationJSONInlineScriptTagTriggerEventEnum = "object_builded"
)

type CreateInlineScriptTag201ApplicationJSONInlineScriptTag struct {
	AccountID          *string                                                                 `json:"account_id"`
	DisplayScope       *CreateInlineScriptTag201ApplicationJSONInlineScriptTagDisplayScopeEnum `json:"display_scope"`
	ID                 *int64                                                                  `json:"id"`
	MakeDate           *int64                                                                  `json:"make_date"`
	OauthApplicationID *int64                                                                  `json:"oauth_application_id"`
	Script             *string                                                                 `json:"script"`
	TriggerEvent       *CreateInlineScriptTag201ApplicationJSONInlineScriptTagTriggerEventEnum `json:"trigger_event"`
	UpdateDate         *int64                                                                  `json:"update_date"`
}

type CreateInlineScriptTag201ApplicationJSON struct {
	InlineScriptTag *CreateInlineScriptTag201ApplicationJSONInlineScriptTag `json:"inline_script_tag"`
}

type CreateInlineScriptTagResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	CreateInlineScriptTag201ApplicationJSONObject *CreateInlineScriptTag201ApplicationJSON
}
