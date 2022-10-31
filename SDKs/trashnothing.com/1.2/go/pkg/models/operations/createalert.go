package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAlertRequestBody struct {
	Search string `multipartForm:"name=search"`
	Types  string `multipartForm:"name=types"`
}

type CreateAlertRequest struct {
	Request CreateAlertRequestBody `request:"mediaType=multipart/form-data"`
}

type CreateAlertResponse struct {
	Alert       *shared.Alert
	ContentType string
	StatusCode  int64
}
