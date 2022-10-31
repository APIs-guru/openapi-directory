package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDataSourceRequest struct {
	Request *shared.Datasource `request:"mediaType=application/json"`
}

type CreateDataSource200ApplicationJSONActionEnum string

const (
	CreateDataSource200ApplicationJSONActionEnumCreateDataSource CreateDataSource200ApplicationJSONActionEnum = "createDataSource"
)

type CreateDataSource200ApplicationJSONData struct {
	Datasources []shared.Datasource `json:"datasources"`
}

type CreateDataSource200ApplicationJSONResultEnum string

const (
	CreateDataSource200ApplicationJSONResultEnumSuccess CreateDataSource200ApplicationJSONResultEnum = "success"
	CreateDataSource200ApplicationJSONResultEnumError   CreateDataSource200ApplicationJSONResultEnum = "error"
)

type CreateDataSource200ApplicationJSON struct {
	Action CreateDataSource200ApplicationJSONActionEnum `json:"action"`
	Data   CreateDataSource200ApplicationJSONData       `json:"data"`
	Result CreateDataSource200ApplicationJSONResultEnum `json:"result"`
}

type CreateDataSourceResponse struct {
	ContentType                              string
	StatusCode                               int64
	CreateDataSource200ApplicationJSONObject *CreateDataSource200ApplicationJSON
}
