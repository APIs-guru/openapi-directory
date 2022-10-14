package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatasetPkRelatedObjectsPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetDatasetPkRelatedObjectsSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatasetPkRelatedObjectsRequest struct {
	PathParams GetDatasetPkRelatedObjectsPathParams
	Security   GetDatasetPkRelatedObjectsSecurity
}

type GetDatasetPkRelatedObjects401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetPkRelatedObjects404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetPkRelatedObjects500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatasetPkRelatedObjectsResponse struct {
	ContentType                                        string
	DatasetRelatedObjectsResponse                      *shared.DatasetRelatedObjectsResponse
	GetDatasetPkRelatedObjects401ApplicationJSONObject *GetDatasetPkRelatedObjects401ApplicationJSON
	GetDatasetPkRelatedObjects404ApplicationJSONObject *GetDatasetPkRelatedObjects404ApplicationJSON
	GetDatasetPkRelatedObjects500ApplicationJSONObject *GetDatasetPkRelatedObjects500ApplicationJSON
	StatusCode                                         int64
}
