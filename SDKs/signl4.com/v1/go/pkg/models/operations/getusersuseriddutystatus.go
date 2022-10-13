package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersUserIDDutyStatusPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type GetUsersUserIDDutyStatusRequest struct {
	PathParams GetUsersUserIDDutyStatusPathParams
}

type GetUsersUserIDDutyStatusResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
	UserDutyInfo         *shared.UserDutyInfo
}
