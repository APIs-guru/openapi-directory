package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteCategoriesTeamIDCategoryIDPathParams struct {
	CategoryID string `pathParam:"style=simple,explode=false,name=categoryId"`
	TeamID     string `pathParam:"style=simple,explode=false,name=teamId"`
}

type DeleteCategoriesTeamIDCategoryIDRequest struct {
	PathParams DeleteCategoriesTeamIDCategoryIDPathParams
}

type DeleteCategoriesTeamIDCategoryIDResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
