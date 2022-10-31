package operations

import (
	"openapi/pkg/models/shared"
)

type ArticlePostRequest struct {
	Request shared.ArticleDto `request:"mediaType=application/json"`
}

type ArticlePostResponse struct {
	APIResponse                   *shared.APIResponse
	ContentType                   string
	DefaultResponseDtoOfStatusDto *shared.DefaultResponseDtoOfStatusDto
	StatusCode                    int64
}
