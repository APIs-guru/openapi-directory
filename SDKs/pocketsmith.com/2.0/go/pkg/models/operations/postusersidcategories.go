package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersIDCategoriesPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PostUsersIDCategoriesRequestBody struct {
	Colour   *string `json:"colour"`
	ParentID *int64  `json:"parent_id"`
	Title    string  `json:"title"`
}

type PostUsersIDCategoriesRequest struct {
	PathParams PostUsersIDCategoriesPathParams
	Request    *PostUsersIDCategoriesRequestBody `request:"mediaType=application/json"`
}

type PostUsersIDCategoriesResponse struct {
	Category    *shared.Category
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
