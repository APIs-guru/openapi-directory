package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteDatabasePkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type DeleteDatabasePkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteDatabasePk200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDatabasePk401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDatabasePk403ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDatabasePk404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDatabasePk422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDatabasePk500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteDatabasePkRequest struct {
	PathParams DeleteDatabasePkPathParams
	Security   DeleteDatabasePkSecurity
}

type DeleteDatabasePkResponse struct {
	ContentType                              string
	DeleteDatabasePk200ApplicationJSONObject *DeleteDatabasePk200ApplicationJSON
	DeleteDatabasePk401ApplicationJSONObject *DeleteDatabasePk401ApplicationJSON
	DeleteDatabasePk403ApplicationJSONObject *DeleteDatabasePk403ApplicationJSON
	DeleteDatabasePk404ApplicationJSONObject *DeleteDatabasePk404ApplicationJSON
	DeleteDatabasePk422ApplicationJSONObject *DeleteDatabasePk422ApplicationJSON
	DeleteDatabasePk500ApplicationJSONObject *DeleteDatabasePk500ApplicationJSON
	StatusCode                               int64
}
