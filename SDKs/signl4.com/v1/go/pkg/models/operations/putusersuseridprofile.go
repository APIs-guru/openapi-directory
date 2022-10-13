package operations

import (
	"openapi/pkg/models/shared"
)

type PutUsersUserIDProfilePathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PutUsersUserIDProfileRequests struct {
	UserProfile  *shared.UserProfile `request:"mediaType=application/*+json"`
	UserProfile1 *shared.UserProfile `request:"mediaType=application/json"`
	UserProfile2 *shared.UserProfile `request:"mediaType=application/json-patch+json"`
	UserProfile3 *shared.UserProfile `request:"mediaType=text/json"`
}

type PutUsersUserIDProfileRequest struct {
	PathParams PutUsersUserIDProfilePathParams
	Request    *PutUsersUserIDProfileRequests
}

type PutUsersUserIDProfileResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
	UserInfo             *shared.UserInfo
}
