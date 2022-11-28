package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteSavedQueryQueryParams struct {
	Q []int64 `queryParam:"serialization=json,name=q"`
}

type DeleteSavedQuerySecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteSavedQuery200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteSavedQuery401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteSavedQuery404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteSavedQuery422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteSavedQuery500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteSavedQueryRequest struct {
	QueryParams DeleteSavedQueryQueryParams
	Security    DeleteSavedQuerySecurity
}

type DeleteSavedQueryResponse struct {
	ContentType                              string
	DeleteSavedQuery200ApplicationJSONObject *DeleteSavedQuery200ApplicationJSON
	DeleteSavedQuery401ApplicationJSONObject *DeleteSavedQuery401ApplicationJSON
	DeleteSavedQuery404ApplicationJSONObject *DeleteSavedQuery404ApplicationJSON
	DeleteSavedQuery422ApplicationJSONObject *DeleteSavedQuery422ApplicationJSON
	DeleteSavedQuery500ApplicationJSONObject *DeleteSavedQuery500ApplicationJSON
	StatusCode                               int64
}
