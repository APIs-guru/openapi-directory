package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCategoriesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteCategoriesIDRequest struct {
	PathParams DeleteCategoriesIDPathParams
}

type DeleteCategoriesIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
