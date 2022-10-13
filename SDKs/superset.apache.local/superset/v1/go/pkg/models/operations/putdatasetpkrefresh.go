package operations

import (
	"openapi/pkg/models/shared"
)

type PutDatasetPkRefreshPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type PutDatasetPkRefreshSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PutDatasetPkRefreshRequest struct {
	PathParams PutDatasetPkRefreshPathParams
	Security   PutDatasetPkRefreshSecurity
}

type PutDatasetPkRefresh200ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDatasetPkRefresh401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDatasetPkRefresh403ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDatasetPkRefresh404ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDatasetPkRefresh422ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDatasetPkRefresh500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutDatasetPkRefreshResponse struct {
	ContentType                                 string
	PutDatasetPkRefresh200ApplicationJSONObject *PutDatasetPkRefresh200ApplicationJSON
	PutDatasetPkRefresh401ApplicationJSONObject *PutDatasetPkRefresh401ApplicationJSON
	PutDatasetPkRefresh403ApplicationJSONObject *PutDatasetPkRefresh403ApplicationJSON
	PutDatasetPkRefresh404ApplicationJSONObject *PutDatasetPkRefresh404ApplicationJSON
	PutDatasetPkRefresh422ApplicationJSONObject *PutDatasetPkRefresh422ApplicationJSON
	PutDatasetPkRefresh500ApplicationJSONObject *PutDatasetPkRefresh500ApplicationJSON
	StatusCode                                  int64
}
