package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDataSourcePathParams struct {
	DatasourceID string `pathParam:"style=simple,explode=false,name=datasourceId"`
}

type DeleteDataSource200ApplicationJSONActionEnum string

const (
	DeleteDataSource200ApplicationJSONActionEnumDeleteDataSource DeleteDataSource200ApplicationJSONActionEnum = "deleteDataSource"
)

type DeleteDataSource200ApplicationJSONData struct {
	Datasources []shared.Datasource `json:"datasources"`
}

type DeleteDataSource200ApplicationJSONResultEnum string

const (
	DeleteDataSource200ApplicationJSONResultEnumSuccess DeleteDataSource200ApplicationJSONResultEnum = "success"
	DeleteDataSource200ApplicationJSONResultEnumError   DeleteDataSource200ApplicationJSONResultEnum = "error"
)

type DeleteDataSource200ApplicationJSON struct {
	Action DeleteDataSource200ApplicationJSONActionEnum `json:"action"`
	Data   DeleteDataSource200ApplicationJSONData       `json:"data"`
	Result DeleteDataSource200ApplicationJSONResultEnum `json:"result"`
}

type DeleteDataSourceRequest struct {
	PathParams DeleteDataSourcePathParams
}

type DeleteDataSourceResponse struct {
	ContentType                              string
	StatusCode                               int64
	DeleteDataSource200ApplicationJSONObject *DeleteDataSource200ApplicationJSON
}
