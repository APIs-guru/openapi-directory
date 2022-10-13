package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDatasetPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type DeleteDatasetPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteDatasetPkRequest struct {
	PathParams DeleteDatasetPkPathParams
	Security   DeleteDatasetPkSecurity
}

type DeleteDatasetPk200ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDatasetPk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDatasetPk403ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDatasetPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDatasetPk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDatasetPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteDatasetPkResponse struct {
	ContentType                             string
	DeleteDatasetPk200ApplicationJSONObject *DeleteDatasetPk200ApplicationJSON
	DeleteDatasetPk401ApplicationJSONObject *DeleteDatasetPk401ApplicationJSON
	DeleteDatasetPk403ApplicationJSONObject *DeleteDatasetPk403ApplicationJSON
	DeleteDatasetPk404ApplicationJSONObject *DeleteDatasetPk404ApplicationJSON
	DeleteDatasetPk422ApplicationJSONObject *DeleteDatasetPk422ApplicationJSON
	DeleteDatasetPk500ApplicationJSONObject *DeleteDatasetPk500ApplicationJSON
	StatusCode                              int64
}
