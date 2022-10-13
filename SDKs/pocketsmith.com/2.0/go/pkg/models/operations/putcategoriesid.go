package operations

import (
	"openapi/pkg/models/shared"
)

type PutCategoriesIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutCategoriesIDRequestBody struct {
	Colour   *string `json:"colour"`
	ParentID *int64  `json:"parent_id"`
	Title    *string `json:"title"`
}

type PutCategoriesIDRequest struct {
	PathParams PutCategoriesIDPathParams
	Request    *PutCategoriesIDRequestBody `request:"mediaType=application/json"`
}

type PutCategoriesIDResponse struct {
	Category    *shared.Category
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
