package operations

import (
	"openapi/pkg/models/shared"
)

type ListDirectives200ApplicationJSONActionEnum string

const (
	ListDirectives200ApplicationJSONActionEnumListDirectives ListDirectives200ApplicationJSONActionEnum = "listDirectives"
)

type ListDirectives200ApplicationJSONData struct {
	Directives []shared.Directive `json:"directives"`
}

type ListDirectives200ApplicationJSONResultEnum string

const (
	ListDirectives200ApplicationJSONResultEnumSuccess ListDirectives200ApplicationJSONResultEnum = "success"
	ListDirectives200ApplicationJSONResultEnumError   ListDirectives200ApplicationJSONResultEnum = "error"
)

type ListDirectives200ApplicationJSON struct {
	Action ListDirectives200ApplicationJSONActionEnum `json:"action"`
	Data   ListDirectives200ApplicationJSONData       `json:"data"`
	Result ListDirectives200ApplicationJSONResultEnum `json:"result"`
}

type ListDirectivesResponse struct {
	ContentType                            string
	StatusCode                             int64
	ListDirectives200ApplicationJSONObject *ListDirectives200ApplicationJSON
}
