package operations

import (
	"openapi/pkg/models/shared"
)

type PostSavedQuerySecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostSavedQueryRequest struct {
	Request  shared.SavedQueryRestAPIPost `request:"mediaType=application/json"`
	Security PostSavedQuerySecurity
}

type PostSavedQuery201ApplicationJSON struct {
	ID     *string                       `json:"id,omitempty"`
	Result *shared.SavedQueryRestAPIPost `json:"result,omitempty"`
}

type PostSavedQuery400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSavedQuery401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSavedQuery422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSavedQuery500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSavedQueryResponse struct {
	ContentType                            string
	PostSavedQuery201ApplicationJSONObject *PostSavedQuery201ApplicationJSON
	PostSavedQuery400ApplicationJSONObject *PostSavedQuery400ApplicationJSON
	PostSavedQuery401ApplicationJSONObject *PostSavedQuery401ApplicationJSON
	PostSavedQuery422ApplicationJSONObject *PostSavedQuery422ApplicationJSON
	PostSavedQuery500ApplicationJSONObject *PostSavedQuery500ApplicationJSON
	StatusCode                             int64
}
