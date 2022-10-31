package operations

import (
	"openapi/pkg/models/shared"
)

type PutAttributesComputedIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutAttributesComputedIDRequest struct {
	PathParams PutAttributesComputedIDPathParams
	Request    shared.Attribute `request:"mediaType=application/json"`
}

type PutAttributesComputedIDResponse struct {
	Attribute   *shared.Attribute
	ContentType string
	StatusCode  int64
}
