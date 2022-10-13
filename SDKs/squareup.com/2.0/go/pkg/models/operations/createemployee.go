package operations

import (
	"openapi/pkg/models/shared"
)

type CreateEmployeeSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type CreateEmployeeRequest struct {
	Request  shared.V1Employee `request:"mediaType=application/json"`
	Security CreateEmployeeSecurity
}

type CreateEmployeeResponse struct {
	ContentType string
	StatusCode  int64
	V1Employee  *shared.V1Employee
}
