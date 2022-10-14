package operations

import (
	"openapi/pkg/models/shared"
)

type PutCSSTemplatePkPathParams struct {
	Pk int64 `pathParam:"style=simple,explode=false,name=pk"`
}

type PutCSSTemplatePkSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PutCSSTemplatePkRequest struct {
	PathParams PutCSSTemplatePkPathParams
	Request    shared.CSSTemplateRestAPIPut `request:"mediaType=application/json"`
	Security   PutCSSTemplatePkSecurity
}

type PutCSSTemplatePk200ApplicationJSON struct {
	Result *shared.CSSTemplateRestAPIPut `json:"result,omitempty"`
}

type PutCSSTemplatePk400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutCSSTemplatePk401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutCSSTemplatePk404ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutCSSTemplatePk422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutCSSTemplatePk500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PutCSSTemplatePkResponse struct {
	ContentType                              string
	PutCSSTemplatePk200ApplicationJSONObject *PutCSSTemplatePk200ApplicationJSON
	PutCSSTemplatePk400ApplicationJSONObject *PutCSSTemplatePk400ApplicationJSON
	PutCSSTemplatePk401ApplicationJSONObject *PutCSSTemplatePk401ApplicationJSON
	PutCSSTemplatePk404ApplicationJSONObject *PutCSSTemplatePk404ApplicationJSON
	PutCSSTemplatePk422ApplicationJSONObject *PutCSSTemplatePk422ApplicationJSON
	PutCSSTemplatePk500ApplicationJSONObject *PutCSSTemplatePk500ApplicationJSON
	StatusCode                               int64
}
