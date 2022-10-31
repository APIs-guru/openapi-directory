package operations

import (
	"openapi/pkg/models/shared"
)

type ArticleUpdateArticleGymDetailsRequest struct {
	Request []shared.GymArticleDetailsDto `request:"mediaType=application/json"`
}

type ArticleUpdateArticleGymDetailsResponse struct {
	APIResponse                   *shared.APIResponse
	ContentType                   string
	DefaultResponseDtoOfStatusDto *shared.DefaultResponseDtoOfStatusDto
	StatusCode                    int64
}
