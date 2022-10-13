package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersIDPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetUsersIDRequest struct {
	PathParams GetUsersIDPathParams
}

type GetUsersIDResponse struct {
	ContentType string
	Error       *shared.Error
	StatusCode  int64
	User        *shared.User
}
