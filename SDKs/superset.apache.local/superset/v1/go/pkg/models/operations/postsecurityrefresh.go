package operations

import (
	"openapi/pkg/models/shared"
)

type PostSecurityRefreshSecurity struct {
	JwtRefresh shared.SchemeJwtRefresh `security:"scheme,type=http,subtype=bearer"`
}

type PostSecurityRefreshRequest struct {
	Security PostSecurityRefreshSecurity
}

type PostSecurityRefresh200ApplicationJSON struct {
	AccessToken *string `json:"access_token,omitempty"`
}

type PostSecurityRefresh401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSecurityRefresh500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSecurityRefreshResponse struct {
	ContentType                                 string
	PostSecurityRefresh200ApplicationJSONObject *PostSecurityRefresh200ApplicationJSON
	PostSecurityRefresh401ApplicationJSONObject *PostSecurityRefresh401ApplicationJSON
	PostSecurityRefresh500ApplicationJSONObject *PostSecurityRefresh500ApplicationJSON
	StatusCode                                  int64
}
