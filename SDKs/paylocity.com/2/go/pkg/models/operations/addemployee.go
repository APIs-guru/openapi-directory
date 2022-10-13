package operations

import (
	"openapi/pkg/models/shared"
)

type AddEmployeePathParams struct {
	CompanyID string `pathParam:"style=simple,explode=false,name=companyId"`
}

type AddEmployeeSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type AddEmployeeRequest struct {
	PathParams AddEmployeePathParams
	Request    shared.Employee `request:"mediaType=application/json"`
	Security   AddEmployeeSecurity
}

type AddEmployeeResponse struct {
	ContentType         string
	StatusCode          int64
	EmployeeIDResponses []shared.EmployeeIDResponse
	Errors              []shared.Error
}
