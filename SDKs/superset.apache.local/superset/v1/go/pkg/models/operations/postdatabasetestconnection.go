package operations

import (
	"openapi/pkg/models/shared"
)

type PostDatabaseTestConnectionSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostDatabaseTestConnectionRequest struct {
	Request  shared.DatabaseTestConnectionSchema `request:"mediaType=application/json"`
	Security PostDatabaseTestConnectionSecurity
}

type PostDatabaseTestConnection200ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDatabaseTestConnection400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDatabaseTestConnection422ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDatabaseTestConnection500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDatabaseTestConnectionResponse struct {
	ContentType                                        string
	PostDatabaseTestConnection200ApplicationJSONObject *PostDatabaseTestConnection200ApplicationJSON
	PostDatabaseTestConnection400ApplicationJSONObject *PostDatabaseTestConnection400ApplicationJSON
	PostDatabaseTestConnection422ApplicationJSONObject *PostDatabaseTestConnection422ApplicationJSON
	PostDatabaseTestConnection500ApplicationJSONObject *PostDatabaseTestConnection500ApplicationJSON
	StatusCode                                         int64
}
