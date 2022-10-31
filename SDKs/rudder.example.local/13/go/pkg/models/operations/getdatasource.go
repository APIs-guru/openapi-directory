package operations

import (
	"openapi/pkg/models/shared"
)

type GetDataSourcePathParams struct {
	DatasourceID string `pathParam:"style=simple,explode=false,name=datasourceId"`
}

type GetDataSourceRequest struct {
	PathParams GetDataSourcePathParams
}

type GetDataSource200ApplicationJSONActionEnum string

const (
	GetDataSource200ApplicationJSONActionEnumGetDataSource GetDataSource200ApplicationJSONActionEnum = "getDataSource"
)

type GetDataSource200ApplicationJSONData struct {
	Datasources []shared.Datasource `json:"datasources"`
}

type GetDataSource200ApplicationJSONResultEnum string

const (
	GetDataSource200ApplicationJSONResultEnumSuccess GetDataSource200ApplicationJSONResultEnum = "success"
	GetDataSource200ApplicationJSONResultEnumError   GetDataSource200ApplicationJSONResultEnum = "error"
)

type GetDataSource200ApplicationJSON struct {
	Action GetDataSource200ApplicationJSONActionEnum `json:"action"`
	Data   GetDataSource200ApplicationJSONData       `json:"data"`
	Result GetDataSource200ApplicationJSONResultEnum `json:"result"`
}

type GetDataSourceResponse struct {
	ContentType                           string
	StatusCode                            int64
	GetDataSource200ApplicationJSONObject *GetDataSource200ApplicationJSON
}
