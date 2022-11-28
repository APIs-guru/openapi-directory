package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCSSTemplatePkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type DeleteCSSTemplatePkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteCSSTemplatePk200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteCSSTemplatePk404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteCSSTemplatePk422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteCSSTemplatePk500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type DeleteCSSTemplatePkRequest struct {
	PathParams DeleteCSSTemplatePkPathParams
	Security   DeleteCSSTemplatePkSecurity
}

type DeleteCSSTemplatePkResponse struct {
	ContentType                                 string
	DeleteCSSTemplatePk200ApplicationJSONObject *DeleteCSSTemplatePk200ApplicationJSON
	DeleteCSSTemplatePk404ApplicationJSONObject *DeleteCSSTemplatePk404ApplicationJSON
	DeleteCSSTemplatePk422ApplicationJSONObject *DeleteCSSTemplatePk422ApplicationJSON
	DeleteCSSTemplatePk500ApplicationJSONObject *DeleteCSSTemplatePk500ApplicationJSON
	StatusCode                                  int64
}
