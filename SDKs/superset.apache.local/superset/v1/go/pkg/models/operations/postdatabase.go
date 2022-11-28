package operations

import (
	"openapi/pkg/models/shared"
)

type PostDatabaseSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostDatabase201ApplicationJSON struct {
	ID     *float64                    `json:"id,omitempty"`
	Result *shared.DatabaseRestAPIPost `json:"result,omitempty"`
}

type PostDatabase400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatabase401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatabase404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatabase500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatabaseRequest struct {
	Request  shared.DatabaseRestAPIPost `request:"mediaType=application/json"`
	Security PostDatabaseSecurity
}

type PostDatabaseResponse struct {
	ContentType                          string
	PostDatabase201ApplicationJSONObject *PostDatabase201ApplicationJSON
	PostDatabase400ApplicationJSONObject *PostDatabase400ApplicationJSON
	PostDatabase401ApplicationJSONObject *PostDatabase401ApplicationJSON
	PostDatabase404ApplicationJSONObject *PostDatabase404ApplicationJSON
	PostDatabase500ApplicationJSONObject *PostDatabase500ApplicationJSON
	StatusCode                           int64
}
