package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDirectivePathParams struct {
	DirectiveID string `pathParam:"style=simple,explode=false,name=directiveId"`
}

type DeleteDirective200ApplicationJSONActionEnum string

const (
	DeleteDirective200ApplicationJSONActionEnumDeleteDirective DeleteDirective200ApplicationJSONActionEnum = "deleteDirective"
)

type DeleteDirective200ApplicationJSONData struct {
	Directives []shared.Directive `json:"directives"`
}

type DeleteDirective200ApplicationJSONResultEnum string

const (
	DeleteDirective200ApplicationJSONResultEnumSuccess DeleteDirective200ApplicationJSONResultEnum = "success"
	DeleteDirective200ApplicationJSONResultEnumError   DeleteDirective200ApplicationJSONResultEnum = "error"
)

type DeleteDirective200ApplicationJSON struct {
	Action DeleteDirective200ApplicationJSONActionEnum `json:"action"`
	Data   DeleteDirective200ApplicationJSONData       `json:"data"`
	Result DeleteDirective200ApplicationJSONResultEnum `json:"result"`
}

type DeleteDirectiveRequest struct {
	PathParams DeleteDirectivePathParams
}

type DeleteDirectiveResponse struct {
	ContentType                             string
	StatusCode                              int64
	DeleteDirective200ApplicationJSONObject *DeleteDirective200ApplicationJSON
}
