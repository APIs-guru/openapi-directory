package operations

import (
	"openapi/pkg/models/shared"
)

type PutUserTagPathParams struct {
	TagID  string `pathParam:"style=simple,explode=false,name=TagId"`
	UserID string `pathParam:"style=simple,explode=false,name=UserId"`
}

type PutUserTagHeaders struct {
	APIVersion    string `header:"style=simple,explode=false,name=Api-Version"`
	Authorization string `header:"style=simple,explode=false,name=Authorization"`
}

type PutUserTagRequest struct {
	PathParams PutUserTagPathParams
	Headers    PutUserTagHeaders
}

type PutUserTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
	Tag         *shared.Tag
}
