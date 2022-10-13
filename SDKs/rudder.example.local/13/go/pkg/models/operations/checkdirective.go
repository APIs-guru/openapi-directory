package operations

import (
	"openapi/pkg/models/shared"
)

type CheckDirectivePathParams struct {
	DirectiveID string `pathParam:"style=simple,explode=false,name=directiveId"`
}

type CheckDirectiveRequest struct {
	PathParams CheckDirectivePathParams
	Request    shared.Directive `request:"mediaType=application/json"`
}

type CheckDirective200ApplicationJSONActionEnum string

const (
	CheckDirective200ApplicationJSONActionEnumCheckDirective CheckDirective200ApplicationJSONActionEnum = "checkDirective"
)

type CheckDirective200ApplicationJSONData struct {
	Directives []shared.Directive `json:"directives"`
}

type CheckDirective200ApplicationJSONResultEnum string

const (
	CheckDirective200ApplicationJSONResultEnumSuccess CheckDirective200ApplicationJSONResultEnum = "success"
	CheckDirective200ApplicationJSONResultEnumError   CheckDirective200ApplicationJSONResultEnum = "error"
)

type CheckDirective200ApplicationJSON struct {
	Action CheckDirective200ApplicationJSONActionEnum `json:"action"`
	Data   CheckDirective200ApplicationJSONData       `json:"data"`
	Result CheckDirective200ApplicationJSONResultEnum `json:"result"`
}

type CheckDirectiveResponse struct {
	ContentType                            string
	StatusCode                             int64
	CheckDirective200ApplicationJSONObject *CheckDirective200ApplicationJSON
}
