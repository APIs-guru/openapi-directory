package operations

import (
	"openapi/pkg/models/shared"
)

type PostDatabaseValidateParametersSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostDatabaseValidateParameters200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatabaseValidateParameters400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatabaseValidateParameters422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatabaseValidateParameters500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatabaseValidateParametersRequest struct {
	Request  shared.DatabaseValidateParametersSchema `request:"mediaType=application/json"`
	Security PostDatabaseValidateParametersSecurity
}

type PostDatabaseValidateParametersResponse struct {
	ContentType                                            string
	PostDatabaseValidateParameters200ApplicationJSONObject *PostDatabaseValidateParameters200ApplicationJSON
	PostDatabaseValidateParameters400ApplicationJSONObject *PostDatabaseValidateParameters400ApplicationJSON
	PostDatabaseValidateParameters422ApplicationJSONObject *PostDatabaseValidateParameters422ApplicationJSON
	PostDatabaseValidateParameters500ApplicationJSONObject *PostDatabaseValidateParameters500ApplicationJSON
	StatusCode                                             int64
}
