package operations

import (
	"openapi/pkg/models/shared"
)

type GetOpenapiVersionOpenapiPathParams struct {
	Version string `pathParam:"style=simple,explode=false,name=version"`
}

type GetOpenapiVersionOpenapiSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type GetOpenapiVersionOpenapi404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetOpenapiVersionOpenapi500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type GetOpenapiVersionOpenapiRequest struct {
	PathParams GetOpenapiVersionOpenapiPathParams
	Security   GetOpenapiVersionOpenapiSecurity
}

type GetOpenapiVersionOpenapiResponse struct {
	ContentType                                      string
	GetOpenapiVersionOpenapi200ApplicationJSONObject map[string]interface{}
	GetOpenapiVersionOpenapi404ApplicationJSONObject *GetOpenapiVersionOpenapi404ApplicationJSON
	GetOpenapiVersionOpenapi500ApplicationJSONObject *GetOpenapiVersionOpenapi500ApplicationJSON
	StatusCode                                       int64
}
