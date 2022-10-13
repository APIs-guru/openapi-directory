package operations

import (
	"openapi/pkg/models/shared"
)

type PostLogSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostLogRequest struct {
	Request  shared.LogRestAPIPost `request:"mediaType=application/json"`
	Security PostLogSecurity
}

type PostLog201ApplicationJSON struct {
	ID     *string                `json:"id"`
	Result *shared.LogRestAPIPost `json:"result"`
}

type PostLog400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostLog401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostLog422ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostLog500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostLogResponse struct {
	ContentType                     string
	PostLog201ApplicationJSONObject *PostLog201ApplicationJSON
	PostLog400ApplicationJSONObject *PostLog400ApplicationJSON
	PostLog401ApplicationJSONObject *PostLog401ApplicationJSON
	PostLog422ApplicationJSONObject *PostLog422ApplicationJSON
	PostLog500ApplicationJSONObject *PostLog500ApplicationJSON
	StatusCode                      int64
}
