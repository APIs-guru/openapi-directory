package operations

import (
	"openapi/pkg/models/shared"
)

type GetCategoryPathParams struct {
	Category string `pathParam:"style=simple,explode=false,name=category"`
}

type GetCategoryRequest struct {
	PathParams GetCategoryPathParams
}

type GetCategoryResponse struct {
	ContentType string
	StatusCode  int64
	Category    *shared.Category
	LegacyError *shared.LegacyError
}
