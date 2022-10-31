package operations

import (
	"openapi/pkg/models/shared"
)

type CreateLegalEntityRequest struct {
	Request interface{} `request:"mediaType=application/json"`
}

type CreateLegalEntityResponse struct {
	ContentType string
	ErrorModels []interface{}
	LegalEntity *shared.LegalEntity
	StatusCode  int64
}
