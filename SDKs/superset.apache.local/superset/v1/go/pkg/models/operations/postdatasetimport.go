package operations

import (
	"openapi/pkg/models/shared"
)

type PostDatasetImportRequestBodyFormData struct {
	Content  []byte `multipartForm:"content"`
	FormData string `multipartForm:"name=formData"`
}

type PostDatasetImportRequestBody struct {
	FormData  *PostDatasetImportRequestBodyFormData `multipartForm:"file"`
	Overwrite *bool                                 `multipartForm:"name=overwrite"`
	Passwords *string                               `multipartForm:"name=passwords"`
}

type PostDatasetImportSecurity struct {
	Jwt shared.SchemeJwt `security:"scheme,type=http,subtype=bearer"`
}

type PostDatasetImportRequest struct {
	Request  PostDatasetImportRequestBody `request:"mediaType=multipart/form-data"`
	Security PostDatasetImportSecurity
}

type PostDatasetImport200ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatasetImport400ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatasetImport401ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatasetImport422ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatasetImport500ApplicationJSON struct {
	Message *string `json:"message,omitempty"`
}

type PostDatasetImportResponse struct {
	ContentType                               string
	PostDatasetImport200ApplicationJSONObject *PostDatasetImport200ApplicationJSON
	PostDatasetImport400ApplicationJSONObject *PostDatasetImport400ApplicationJSON
	PostDatasetImport401ApplicationJSONObject *PostDatasetImport401ApplicationJSON
	PostDatasetImport422ApplicationJSONObject *PostDatasetImport422ApplicationJSON
	PostDatasetImport500ApplicationJSONObject *PostDatasetImport500ApplicationJSON
	StatusCode                                int64
}
