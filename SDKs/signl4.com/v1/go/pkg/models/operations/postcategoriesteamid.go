package operations

import (
	"openapi/pkg/models/shared"
)

type PostCategoriesTeamIDPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type PostCategoriesTeamIDRequests struct {
	CategoryInfo  *shared.CategoryInfo `request:"mediaType=application/*+json"`
	CategoryInfo1 *shared.CategoryInfo `request:"mediaType=application/json"`
	CategoryInfo2 *shared.CategoryInfo `request:"mediaType=application/json-patch+json"`
	CategoryInfo3 *shared.CategoryInfo `request:"mediaType=text/json"`
}

type PostCategoriesTeamIDRequest struct {
	PathParams PostCategoriesTeamIDPathParams
	Request    *PostCategoriesTeamIDRequests
}

type PostCategoriesTeamIDResponse struct {
	Body                 []byte
	CategoryInfo         *shared.CategoryInfo
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
