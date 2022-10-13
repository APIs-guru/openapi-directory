package operations

import (
	"openapi/pkg/models/shared"
)

type ListEmployeesQueryParams struct {
	BatchToken     *string `queryParam:"style=form,explode=true,name=batch_token"`
	BeginCreatedAt *string `queryParam:"style=form,explode=true,name=begin_created_at"`
	BeginUpdatedAt *string `queryParam:"style=form,explode=true,name=begin_updated_at"`
	EndCreatedAt   *string `queryParam:"style=form,explode=true,name=end_created_at"`
	EndUpdatedAt   *string `queryParam:"style=form,explode=true,name=end_updated_at"`
	ExternalID     *string `queryParam:"style=form,explode=true,name=external_id"`
	Limit          *int64  `queryParam:"style=form,explode=true,name=limit"`
	Order          *string `queryParam:"style=form,explode=true,name=order"`
	Status         *string `queryParam:"style=form,explode=true,name=status"`
}

type ListEmployeesSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type ListEmployeesRequest struct {
	QueryParams ListEmployeesQueryParams
	Security    ListEmployeesSecurity
}

type ListEmployeesResponse struct {
	ContentType string
	StatusCode  int64
	V1Employees []shared.V1Employee
}
