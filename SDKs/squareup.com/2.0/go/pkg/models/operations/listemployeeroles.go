package operations

import (
	"openapi/pkg/models/shared"
)

type ListEmployeeRolesQueryParams struct {
	BatchToken *string `queryParam:"style=form,explode=true,name=batch_token"`
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	Order      *string `queryParam:"style=form,explode=true,name=order"`
}

type ListEmployeeRolesSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListEmployeeRolesRequest struct {
	QueryParams ListEmployeeRolesQueryParams
	Security    ListEmployeeRolesSecurity
}

type ListEmployeeRolesResponse struct {
	ContentType     string
	StatusCode      int64
	V1EmployeeRoles []shared.V1EmployeeRole
}
