package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleGymArticleDetailsPathParams struct {
	ArticleID int32 `pathParam:"style=simple,explode=false,name=articleId"`
	GymID     int32 `pathParam:"style=simple,explode=false,name=gymId"`
}

type ArticleGymArticleDetailsRequest struct {
	PathParams ArticleGymArticleDetailsPathParams
}

type ArticleGymArticleDetailsResponse struct {
	APIResponse                                *shared.APIResponse
	ContentType                                string
	DefaultResponseDtoOfListOfArticleSearchDto *shared.DefaultResponseDtoOfListOfArticleSearchDto
	GymArticleDetailsDto                       *shared.GymArticleDetailsDto
	StatusCode                                 int64
}
