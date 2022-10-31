package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersUserIDPunchOutPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PostUsersUserIDPunchOutRequest struct {
	PathParams PostUsersUserIDPunchOutPathParams
}

type PostUsersUserIDPunchOutResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
	UserDutyInfo         *shared.UserDutyInfo
}
