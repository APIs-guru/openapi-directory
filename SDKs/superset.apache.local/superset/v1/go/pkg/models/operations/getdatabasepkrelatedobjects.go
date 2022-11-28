package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabasePkRelatedObjectsPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetDatabasePkRelatedObjectsSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatabasePkRelatedObjects401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkRelatedObjects404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkRelatedObjects500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkRelatedObjectsRequest struct {
	PathParams GetDatabasePkRelatedObjectsPathParams
	Security   GetDatabasePkRelatedObjectsSecurity
}

type GetDatabasePkRelatedObjectsResponse struct {
	ContentType                                         string
	DatabaseRelatedObjectsResponse                      *shared.DatabaseRelatedObjectsResponse
	GetDatabasePkRelatedObjects401ApplicationJSONObject *GetDatabasePkRelatedObjects401ApplicationJSON
	GetDatabasePkRelatedObjects404ApplicationJSONObject *GetDatabasePkRelatedObjects404ApplicationJSON
	GetDatabasePkRelatedObjects500ApplicationJSONObject *GetDatabasePkRelatedObjects500ApplicationJSON
	StatusCode                                          int64
}
