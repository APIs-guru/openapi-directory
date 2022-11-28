package operations

import (
	"openapi/pkg/models/shared"
)

type PostDashboardImportRequestBodyFormData struct {
	Content  []byte `multipartForm:"content"`
	FormData string `multipartForm:"name=formData"`
}

type PostDashboardImportRequestBody struct {
	FormData  *PostDashboardImportRequestBodyFormData `multipartForm:"file"`
	Overwrite *bool                                   `multipartForm:"name=overwrite"`
	Passwords *string                                 `multipartForm:"name=passwords"`
}

type PostDashboardImportSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostDashboardImport200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDashboardImport400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDashboardImport401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDashboardImport422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDashboardImport500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDashboardImportRequest struct {
	Request  PostDashboardImportRequestBody `request:"mediaType=multipart/form-data"`
	Security PostDashboardImportSecurity
}

type PostDashboardImportResponse struct {
	ContentType                                 string
	PostDashboardImport200ApplicationJSONObject *PostDashboardImport200ApplicationJSON
	PostDashboardImport400ApplicationJSONObject *PostDashboardImport400ApplicationJSON
	PostDashboardImport401ApplicationJSONObject *PostDashboardImport401ApplicationJSON
	PostDashboardImport422ApplicationJSONObject *PostDashboardImport422ApplicationJSON
	PostDashboardImport500ApplicationJSONObject *PostDashboardImport500ApplicationJSON
	StatusCode                                  int64
}
