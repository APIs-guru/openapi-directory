package operations

import (
	"openapi/pkg/models/shared"
)

type ItemImportRequest struct {
	Request shared.ItemImportRequest `request:"mediaType=application/json"`
}

type ItemImportResponse struct {
	ContentType        string
	ItemImportResponse map[string]interface{}
	StatusCode         int64
}
