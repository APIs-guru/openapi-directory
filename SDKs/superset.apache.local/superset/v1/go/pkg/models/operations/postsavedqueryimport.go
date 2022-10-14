package operations

import (
	"openapi/pkg/models/shared"
)

type PostSavedQueryImportRequestBodyFormData struct {
	Content  []byte `multipartForm:"content"`
	FormData string `multipartForm:"name=formData"`
}

type PostSavedQueryImportRequestBody struct {
	FormData  *PostSavedQueryImportRequestBodyFormData `multipartForm:"file"`
	Overwrite *bool                                    `multipartForm:"name=overwrite"`
	Passwords *string                                  `multipartForm:"name=passwords"`
}

type PostSavedQueryImportSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostSavedQueryImportRequest struct {
	Request  PostSavedQueryImportRequestBody `request:"mediaType=multipart/form-data"`
	Security PostSavedQueryImportSecurity
}

type PostSavedQueryImport200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSavedQueryImport400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSavedQueryImport401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSavedQueryImport422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSavedQueryImport500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostSavedQueryImportResponse struct {
	ContentType                                  string
	PostSavedQueryImport200ApplicationJSONObject *PostSavedQueryImport200ApplicationJSON
	PostSavedQueryImport400ApplicationJSONObject *PostSavedQueryImport400ApplicationJSON
	PostSavedQueryImport401ApplicationJSONObject *PostSavedQueryImport401ApplicationJSON
	PostSavedQueryImport422ApplicationJSONObject *PostSavedQueryImport422ApplicationJSON
	PostSavedQueryImport500ApplicationJSONObject *PostSavedQueryImport500ApplicationJSON
	StatusCode                                   int64
}
