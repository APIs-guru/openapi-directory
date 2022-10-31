package operations

import (
	"openapi/pkg/models/shared"
)

type ArticlePutRequest struct {
	Request shared.ArticleDto `request:"mediaType=application/json"`
}

type ArticlePutResponse struct {
	APIException                  *shared.APIException
	ContentType                   string
	DefaultResponseDtoOfStatusDto *shared.DefaultResponseDtoOfStatusDto
	StatusCode                    int64
}
