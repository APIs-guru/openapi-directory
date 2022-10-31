package operations

import (
	"openapi/pkg/models/shared"
)

type InstitutionsGetByIDRequest struct {
	Request shared.InstitutionsGetByIDRequest `request:"mediaType=application/json"`
}

type InstitutionsGetByIDResponse struct {
	ContentType                 string
	Error                       map[string]interface{}
	InstitutionsGetByIDResponse map[string]interface{}
	StatusCode                  int64
}
