package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountUsersSecurity struct {
	BearerAuth shared.SchemeBearerAuth `security:"scheme,type=http,subtype=bearer"`
}

type GetAccountUsersRequest struct {
	Security GetAccountUsersSecurity
}

type GetAccountUsersResponse struct {
	ContentType string
	StatusCode  int64
	Users       []shared.User
}
