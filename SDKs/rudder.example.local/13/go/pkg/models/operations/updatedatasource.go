package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateDataSourcePathParams struct {
	DatasourceID string `pathParam:"style=simple,explode=false,name=datasourceId"`
}

type UpdateDataSource200ApplicationJSONActionEnum string

const (
	UpdateDataSource200ApplicationJSONActionEnumUpdateDataSource UpdateDataSource200ApplicationJSONActionEnum = "updateDataSource"
)

type UpdateDataSource200ApplicationJSONData struct {
	Datasources []shared.Datasource `json:"datasources"`
}

type UpdateDataSource200ApplicationJSONResultEnum string

const (
	UpdateDataSource200ApplicationJSONResultEnumSuccess UpdateDataSource200ApplicationJSONResultEnum = "success"
	UpdateDataSource200ApplicationJSONResultEnumError   UpdateDataSource200ApplicationJSONResultEnum = "error"
)

type UpdateDataSource200ApplicationJSON struct {
	Action UpdateDataSource200ApplicationJSONActionEnum `json:"action"`
	Data   UpdateDataSource200ApplicationJSONData       `json:"data"`
	Result UpdateDataSource200ApplicationJSONResultEnum `json:"result"`
}

type UpdateDataSourceRequest struct {
	PathParams UpdateDataSourcePathParams
	Request    *shared.Datasource `request:"mediaType=application/json"`
}

type UpdateDataSourceResponse struct {
	ContentType                              string
	StatusCode                               int64
	UpdateDataSource200ApplicationJSONObject *UpdateDataSource200ApplicationJSON
}
