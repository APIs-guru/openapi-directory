package operations

import (
	"openapi/pkg/models/shared"
)

type PostCSSTemplateSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostCSSTemplateRequest struct {
	Request  shared.CSSTemplateRestAPIPost `request:"mediaType=application/json"`
	Security PostCSSTemplateSecurity
}

type PostCSSTemplate201ApplicationJSON struct {
	ID     *string                        `json:"id,omitempty"`
	Result *shared.CSSTemplateRestAPIPost `json:"result,omitempty"`
}

type PostCSSTemplate400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostCSSTemplate401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostCSSTemplate422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostCSSTemplate500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostCSSTemplateResponse struct {
	ContentType                             string
	PostCSSTemplate201ApplicationJSONObject *PostCSSTemplate201ApplicationJSON
	PostCSSTemplate400ApplicationJSONObject *PostCSSTemplate400ApplicationJSON
	PostCSSTemplate401ApplicationJSONObject *PostCSSTemplate401ApplicationJSON
	PostCSSTemplate422ApplicationJSONObject *PostCSSTemplate422ApplicationJSON
	PostCSSTemplate500ApplicationJSONObject *PostCSSTemplate500ApplicationJSON
	StatusCode                              int64
}
