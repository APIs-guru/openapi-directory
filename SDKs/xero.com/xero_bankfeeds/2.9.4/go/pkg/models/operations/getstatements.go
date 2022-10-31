package operations

import (
	"openapi/pkg/models/shared"
)

type GetStatementsQueryParams struct {
	Page     *int32 `queryParam:"style=form,explode=true,name=page"`
	PageSize *int32 `queryParam:"style=form,explode=true,name=pageSize"`
}

type GetStatementsHeaders struct {
	XeroApplicationID *string `header:"style=simple,explode=false,name=Xero-Application-Id"`
	XeroTenantID      string  `header:"style=simple,explode=false,name=Xero-Tenant-Id"`
	XeroUserID        *string `header:"style=simple,explode=false,name=Xero-User-Id"`
}

type GetStatementsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetStatementsRequest struct {
	QueryParams GetStatementsQueryParams
	Headers     GetStatementsHeaders
	Security    GetStatementsSecurity
}

type GetStatementsResponse struct {
	ContentType string
	Statements  *shared.Statements
	StatusCode  int64
}
