package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersQueryParams struct {
	UserID *string `queryParam:"style=form,explode=true,name=userId"`
}

type GetUsersRequest struct {
	QueryParams GetUsersQueryParams
}

type GetUsersResponse struct {
	ContentType string
	StatusCode  int64
	Users       []shared.User
}
