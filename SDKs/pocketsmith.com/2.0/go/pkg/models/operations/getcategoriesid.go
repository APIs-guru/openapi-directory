package operations

import (
	"openapi/pkg/models/shared"
)

type GetCategoriesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetCategoriesIDRequest struct {
	PathParams GetCategoriesIDPathParams
}

type GetCategoriesIDResponse struct {
	Category    *shared.Category
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
