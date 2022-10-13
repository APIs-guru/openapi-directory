package operations

import (
	"openapi/pkg/models/shared"
)

type UntagServiceInventoryPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UntagServiceInventoryRequest struct {
	PathParams UntagServiceInventoryPathParams
	Request    []shared.Tag `request:"mediaType=application/json"`
}

type UntagServiceInventoryResponse struct {
	ContentType string
	StatusCode  int64
}
