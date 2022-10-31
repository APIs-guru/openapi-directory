package operations

import (
	"openapi/pkg/models/shared"
)

type PutUsersUserIDChangePasswordPathParams struct {
	UserID string `pathParam:"style=simple,explode=false,name=userId"`
}

type PutUsersUserIDChangePasswordRequests struct {
	UpdatePasswordInfo  *shared.UpdatePasswordInfo `request:"mediaType=application/*+json"`
	UpdatePasswordInfo1 *shared.UpdatePasswordInfo `request:"mediaType=application/json"`
	UpdatePasswordInfo2 *shared.UpdatePasswordInfo `request:"mediaType=application/json-patch+json"`
	UpdatePasswordInfo3 *shared.UpdatePasswordInfo `request:"mediaType=text/json"`
}

type PutUsersUserIDChangePasswordRequest struct {
	PathParams PutUsersUserIDChangePasswordPathParams
	Request    *PutUsersUserIDChangePasswordRequests
}

type PutUsersUserIDChangePasswordResponse struct {
	Body                 []byte
	ContentType          string
	ErrorResponseContent *shared.ErrorResponseContent
	StatusCode           int64
}
