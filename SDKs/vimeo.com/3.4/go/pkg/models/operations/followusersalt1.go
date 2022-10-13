package operations

import (
	"openapi/pkg/models/shared"
)

type FollowUsersAlt1RequestBody struct {
	Users []string `json:"users"`
}

type FollowUsersAlt1Security struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type FollowUsersAlt1Request struct {
	Request  FollowUsersAlt1RequestBody `request:"mediaType=application/json"`
	Security FollowUsersAlt1Security
}

type FollowUsersAlt1Response struct {
	ContentType string
	StatusCode  int64
	Error       *shared.Error
}
