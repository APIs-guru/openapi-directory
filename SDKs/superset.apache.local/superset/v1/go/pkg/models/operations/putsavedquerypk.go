package operations

import (
	"openapi/pkg/models/shared"
)

type PutSavedQueryPkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type PutSavedQueryPkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PutSavedQueryPkRequest struct {
	PathParams PutSavedQueryPkPathParams
	Request    shared.SavedQueryRestAPIPut `request:"mediaType=application/json"`
	Security   PutSavedQueryPkSecurity
}

type PutSavedQueryPk200ApplicationJSON struct {
	Result *shared.SavedQueryRestAPIPut `json:"result"`
}

type PutSavedQueryPk400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutSavedQueryPk401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutSavedQueryPk404ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutSavedQueryPk422ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutSavedQueryPk500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PutSavedQueryPkResponse struct {
	ContentType                             string
	PutSavedQueryPk200ApplicationJSONObject *PutSavedQueryPk200ApplicationJSON
	PutSavedQueryPk400ApplicationJSONObject *PutSavedQueryPk400ApplicationJSON
	PutSavedQueryPk401ApplicationJSONObject *PutSavedQueryPk401ApplicationJSON
	PutSavedQueryPk404ApplicationJSONObject *PutSavedQueryPk404ApplicationJSON
	PutSavedQueryPk422ApplicationJSONObject *PutSavedQueryPk422ApplicationJSON
	PutSavedQueryPk500ApplicationJSONObject *PutSavedQueryPk500ApplicationJSON
	StatusCode                              int64
}
