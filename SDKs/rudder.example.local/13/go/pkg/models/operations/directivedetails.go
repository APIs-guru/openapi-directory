package operations

import (
	"openapi/pkg/models/shared"
)

type DirectiveDetailsPathParams struct {
	DirectiveID string `pathParam:"style=simple,explode=false,name=directiveId"`
}

type DirectiveDetailsRequest struct {
	PathParams DirectiveDetailsPathParams
}

type DirectiveDetails200ApplicationJSONActionEnum string

const (
	DirectiveDetails200ApplicationJSONActionEnumDirectiveDetails DirectiveDetails200ApplicationJSONActionEnum = "directiveDetails"
)

type DirectiveDetails200ApplicationJSONData struct {
	Directives []shared.Directive `json:"directives"`
}

type DirectiveDetails200ApplicationJSONResultEnum string

const (
	DirectiveDetails200ApplicationJSONResultEnumSuccess DirectiveDetails200ApplicationJSONResultEnum = "success"
	DirectiveDetails200ApplicationJSONResultEnumError   DirectiveDetails200ApplicationJSONResultEnum = "error"
)

type DirectiveDetails200ApplicationJSON struct {
	Action DirectiveDetails200ApplicationJSONActionEnum `json:"action"`
	Data   DirectiveDetails200ApplicationJSONData       `json:"data"`
	Result DirectiveDetails200ApplicationJSONResultEnum `json:"result"`
}

type DirectiveDetailsResponse struct {
	ContentType                              string
	StatusCode                               int64
	DirectiveDetails200ApplicationJSONObject *DirectiveDetails200ApplicationJSON
}
