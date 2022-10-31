package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSavedQueryPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type DeleteSavedQueryPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteSavedQueryPkRequest struct {
	PathParams DeleteSavedQueryPkPathParams
	Security   DeleteSavedQueryPkSecurity
}

type DeleteSavedQueryPk200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteSavedQueryPk404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteSavedQueryPk422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteSavedQueryPk500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteSavedQueryPkResponse struct {
	ContentType                                string
	DeleteSavedQueryPk200ApplicationJSONObject *DeleteSavedQueryPk200ApplicationJSON
	DeleteSavedQueryPk404ApplicationJSONObject *DeleteSavedQueryPk404ApplicationJSON
	DeleteSavedQueryPk422ApplicationJSONObject *DeleteSavedQueryPk422ApplicationJSON
	DeleteSavedQueryPk500ApplicationJSONObject *DeleteSavedQueryPk500ApplicationJSON
	StatusCode                                 int64
}
