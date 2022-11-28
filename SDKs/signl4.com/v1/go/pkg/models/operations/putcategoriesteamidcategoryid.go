package operations

import (
	"openapi/pkg/models/shared"
)

type PutCategoriesTeamIDCategoryIDPathParams struct {
	CategoryID string `pathParam:"style=simple,explode=false,name=categoryId"`
	TeamID     string `pathParam:"style=simple,explode=false,name=teamId"`
}

type PutCategoriesTeamIDCategoryIDRequestsInput struct {
	CategoryInfo  *shared.CategoryInfoInput `request:"mediaType=application/*+json"`
	CategoryInfo1 *shared.CategoryInfoInput `request:"mediaType=application/json"`
	CategoryInfo2 *shared.CategoryInfoInput `request:"mediaType=application/json-patch+json"`
	CategoryInfo3 *shared.CategoryInfoInput `request:"mediaType=text/json"`
}

type PutCategoriesTeamIDCategoryIDRequest struct {
	PathParams PutCategoriesTeamIDCategoryIDPathParams
	Request    *PutCategoriesTeamIDCategoryIDRequestsInput
}

type PutCategoriesTeamIDCategoryIDResponse struct {
	Body                 []byte
	CategoryInfo         *shared.CategoryInfo
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
