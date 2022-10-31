package operations

import (
	"openapi/pkg/models/shared"
)

type TagServiceInventoryPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TagServiceInventoryRequest struct {
	PathParams TagServiceInventoryPathParams
	Request    []shared.Tag `request:"mediaType=application/json"`
}

type TagServiceInventoryResponse struct {
	ContentType string
	StatusCode  int64
	Tags        []shared.Tag
}
