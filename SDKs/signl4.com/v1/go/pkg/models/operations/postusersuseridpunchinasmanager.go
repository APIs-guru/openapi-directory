package operations

import (
	"openapi/pkg/models/shared"
)

type PostUsersUserIDPunchInAsManagerPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PostUsersUserIDPunchInAsManagerRequest struct {
	PathParams PostUsersUserIDPunchInAsManagerPathParams
}

type PostUsersUserIDPunchInAsManagerResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
	UserDutyInfo         *shared.UserDutyInfo
}
