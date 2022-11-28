package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteParameterPathParams struct {
	ParameterID string `pathParam:"style=simple,explode=false,name=parameterId"`
}

type DeleteParameter200ApplicationJSONActionEnum string

const (
	DeleteParameter200ApplicationJSONActionEnumDeleteParameter DeleteParameter200ApplicationJSONActionEnum = "deleteParameter"
)

// DeleteParameter200ApplicationJSONData
// Parameters
type DeleteParameter200ApplicationJSONData struct {
	Parameters []shared.Parameter `json:"parameters"`
}

type DeleteParameter200ApplicationJSONResultEnum string

const (
	DeleteParameter200ApplicationJSONResultEnumSuccess DeleteParameter200ApplicationJSONResultEnum = "success"
	DeleteParameter200ApplicationJSONResultEnumError   DeleteParameter200ApplicationJSONResultEnum = "error"
)

type DeleteParameter200ApplicationJSON struct {
	Action DeleteParameter200ApplicationJSONActionEnum `json:"action"`
	Data   DeleteParameter200ApplicationJSONData       `json:"data"`
	ID     string                                      `json:"id"`
	Result DeleteParameter200ApplicationJSONResultEnum `json:"result"`
}

type DeleteParameter500ApplicationJSONActionEnum string

const (
	DeleteParameter500ApplicationJSONActionEnumDeleteParameter DeleteParameter500ApplicationJSONActionEnum = "deleteParameter"
)

type DeleteParameter500ApplicationJSONResultEnum string

const (
	DeleteParameter500ApplicationJSONResultEnumError DeleteParameter500ApplicationJSONResultEnum = "error"
)

type DeleteParameter500ApplicationJSON struct {
	Action       DeleteParameter500ApplicationJSONActionEnum `json:"action"`
	ErrorDetails *string                                     `json:"errorDetails,omitempty"`
	ID           string                                      `json:"id"`
	Result       DeleteParameter500ApplicationJSONResultEnum `json:"result"`
}

type DeleteParameterRequest struct {
	PathParams DeleteParameterPathParams
}

type DeleteParameterResponse struct {
	ContentType                             string
	StatusCode                              int64
	DeleteParameter200ApplicationJSONObject *DeleteParameter200ApplicationJSON
	DeleteParameter500ApplicationJSONObject *DeleteParameter500ApplicationJSON
}
