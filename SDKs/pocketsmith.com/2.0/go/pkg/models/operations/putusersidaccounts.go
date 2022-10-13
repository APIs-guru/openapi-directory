package operations

import (
	"openapi/pkg/models/shared"
)

type PutUsersIDAccountsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type PutUsersIDAccountsRequestBody struct {
	Accounts []shared.Account `json:"accounts"`
}

type PutUsersIDAccountsRequest struct {
	PathParams PutUsersIDAccountsPathParams
	Request    *PutUsersIDAccountsRequestBody `request:"mediaType=application/json"`
}

type PutUsersIDAccountsResponse struct {
	Accounts    []shared.Account
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
