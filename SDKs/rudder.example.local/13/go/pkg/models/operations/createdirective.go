package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDirective200ApplicationJSONActionEnum string

const (
	CreateDirective200ApplicationJSONActionEnumCreateDirective CreateDirective200ApplicationJSONActionEnum = "createDirective"
)

type CreateDirective200ApplicationJSONData struct {
	Directives []shared.Directive `json:"directives"`
}

type CreateDirective200ApplicationJSONResultEnum string

const (
	CreateDirective200ApplicationJSONResultEnumSuccess CreateDirective200ApplicationJSONResultEnum = "success"
	CreateDirective200ApplicationJSONResultEnumError   CreateDirective200ApplicationJSONResultEnum = "error"
)

type CreateDirective200ApplicationJSON struct {
	Action CreateDirective200ApplicationJSONActionEnum `json:"action"`
	Data   CreateDirective200ApplicationJSONData       `json:"data"`
	Result CreateDirective200ApplicationJSONResultEnum `json:"result"`
}

type CreateDirectiveRequest struct {
	Request *shared.DirectiveNew `request:"mediaType=application/json"`
}

type CreateDirectiveResponse struct {
	ContentType                             string
	StatusCode                              int64
	CreateDirective200ApplicationJSONObject *CreateDirective200ApplicationJSON
}
