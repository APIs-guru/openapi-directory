package operations

import (
	"openapi/pkg/models/shared"
)

type GetDatabasePkFunctionNamesPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type GetDatabasePkFunctionNamesSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetDatabasePkFunctionNamesRequest struct {
	PathParams GetDatabasePkFunctionNamesPathParams
	Security   GetDatabasePkFunctionNamesSecurity
}

type GetDatabasePkFunctionNames401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkFunctionNames404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkFunctionNames500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetDatabasePkFunctionNamesResponse struct {
	ContentType                                        string
	DatabaseFunctionNamesResponse                      *shared.DatabaseFunctionNamesResponse
	GetDatabasePkFunctionNames401ApplicationJSONObject *GetDatabasePkFunctionNames401ApplicationJSON
	GetDatabasePkFunctionNames404ApplicationJSONObject *GetDatabasePkFunctionNames404ApplicationJSON
	GetDatabasePkFunctionNames500ApplicationJSONObject *GetDatabasePkFunctionNames500ApplicationJSON
	StatusCode                                         int64
}
