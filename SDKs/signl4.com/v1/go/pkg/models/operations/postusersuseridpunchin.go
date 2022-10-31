package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersUserIDPunchInPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PostUsersUserIDPunchInRequest struct {
	PathParams PostUsersUserIDPunchInPathParams
}

type PostUsersUserIDPunchInResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
	UserDutyInfo         *shared.UserDutyInfo
}
