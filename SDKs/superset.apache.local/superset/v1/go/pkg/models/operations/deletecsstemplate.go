package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCSSTemplateQueryParams struct {
	Q []int64 `queryParam:"serialization=json,name=q"`
}

type DeleteCSSTemplateSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type DeleteCSSTemplateRequest struct {
	QueryParams DeleteCSSTemplateQueryParams
	Security    DeleteCSSTemplateSecurity
}

type DeleteCSSTemplate200ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteCSSTemplate401ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteCSSTemplate404ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteCSSTemplate422ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteCSSTemplate500ApplicationJSON struct {
	Message *string `json:"message"`
}

type DeleteCSSTemplateResponse struct {
	ContentType                               string
	DeleteCSSTemplate200ApplicationJSONObject *DeleteCSSTemplate200ApplicationJSON
	DeleteCSSTemplate401ApplicationJSONObject *DeleteCSSTemplate401ApplicationJSON
	DeleteCSSTemplate404ApplicationJSONObject *DeleteCSSTemplate404ApplicationJSON
	DeleteCSSTemplate422ApplicationJSONObject *DeleteCSSTemplate422ApplicationJSON
	DeleteCSSTemplate500ApplicationJSONObject *DeleteCSSTemplate500ApplicationJSON
	StatusCode                                int64
}
