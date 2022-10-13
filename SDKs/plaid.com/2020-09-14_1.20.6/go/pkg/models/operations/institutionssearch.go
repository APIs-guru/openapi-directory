package operations

import (
	"openapi/pkg/models/shared"
)

type InstitutionsSearchRequest struct {
	Request shared.InstitutionsSearchRequest `request:"mediaType=application/json"`
}

type InstitutionsSearchResponse struct {
	ContentType                string
	Error                      map[string]interface{}
	InstitutionsSearchResponse map[string]interface{}
	StatusCode                 int64
}
