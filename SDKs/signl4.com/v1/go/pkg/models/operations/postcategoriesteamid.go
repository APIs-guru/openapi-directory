package operations

import (
	"openapi/pkg/models/shared"
)

type PostCategoriesTeamIDPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type PostCategoriesTeamIDRequestsInput struct {
	CategoryInfo  *shared.CategoryInfoInput `request:"mediaType=application/*+json"`
	CategoryInfo1 *shared.CategoryInfoInput `request:"mediaType=application/json"`
	CategoryInfo2 *shared.CategoryInfoInput `request:"mediaType=application/json-patch+json"`
	CategoryInfo3 *shared.CategoryInfoInput `request:"mediaType=text/json"`
}

type PostCategoriesTeamIDRequest struct {
	PathParams PostCategoriesTeamIDPathParams
	Request    *PostCategoriesTeamIDRequestsInput
}

type PostCategoriesTeamIDResponse struct {
	Body                 []byte
	CategoryInfo         *shared.CategoryInfo
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
