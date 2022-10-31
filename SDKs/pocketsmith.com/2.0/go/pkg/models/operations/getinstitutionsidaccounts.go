package operations

import (
	"openapi/pkg/models/shared"
)

type GetInstitutionsIDAccountsPathParams struct {
	ID int64 `pathParam:"style=simple,explode=false,name=id"`
}

type GetInstitutionsIDAccountsRequest struct {
	PathParams GetInstitutionsIDAccountsPathParams
}

type GetInstitutionsIDAccountsResponse struct {
	Accounts    []shared.Account
	ContentType string
	Error       *shared.Error
	StatusCode  int64
}
