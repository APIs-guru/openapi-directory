package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserTagPathParams struct {
	TagID  string `pathParam:"style=simple,explode=false,name=TagId"`
	UserID string `pathParam:"style=simple,explode=false,name=UserId"`
}

type DeleteUserTagHeaders struct {
	APIVersion    string `header:"name=Api-Version"`
	Authorization string `header:"name=Authorization"`
}

type DeleteUserTagRequest struct {
	PathParams DeleteUserTagPathParams
	Headers    DeleteUserTagHeaders
}

type DeleteUserTagResponse struct {
	ContentType string
	ErrorModel  *shared.ErrorModel
	StatusCode  int64
}
