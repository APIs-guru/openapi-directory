package operations

import (
	"openapi/pkg/models/shared"
)

type PostDatabaseImportRequestBodyFormData struct {
	Content  []byte `multipartForm:"content"`
	FormData string `multipartForm:"name=formData"`
}

type PostDatabaseImportRequestBody struct {
	FormData  *PostDatabaseImportRequestBodyFormData `multipartForm:"file"`
	Overwrite *bool                                  `multipartForm:"name=overwrite"`
	Passwords *string                                `multipartForm:"name=passwords"`
}

type PostDatabaseImportSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostDatabaseImportRequest struct {
	Request  PostDatabaseImportRequestBody `request:"mediaType=multipart/form-data"`
	Security PostDatabaseImportSecurity
}

type PostDatabaseImport200ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDatabaseImport400ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDatabaseImport401ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDatabaseImport422ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDatabaseImport500ApplicationJSON struct {
	Message *string `json:"message"`
}

type PostDatabaseImportResponse struct {
	ContentType                                string
	PostDatabaseImport200ApplicationJSONObject *PostDatabaseImport200ApplicationJSON
	PostDatabaseImport400ApplicationJSONObject *PostDatabaseImport400ApplicationJSON
	PostDatabaseImport401ApplicationJSONObject *PostDatabaseImport401ApplicationJSON
	PostDatabaseImport422ApplicationJSONObject *PostDatabaseImport422ApplicationJSON
	PostDatabaseImport500ApplicationJSONObject *PostDatabaseImport500ApplicationJSON
	StatusCode                                 int64
}
