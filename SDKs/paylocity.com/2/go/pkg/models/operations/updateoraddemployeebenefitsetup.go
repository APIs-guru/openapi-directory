package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateOrAddEmployeeBenefitSetupPathParams struct {
	CompanyID  string `pathParam:"style=simple,explode=false,name=companyId"`
	EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
}

type UpdateOrAddEmployeeBenefitSetupSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type UpdateOrAddEmployeeBenefitSetupRequest struct {
	PathParams UpdateOrAddEmployeeBenefitSetupPathParams
	Request    shared.BenefitSetup `request:"mediaType=application/json"`
	Security   UpdateOrAddEmployeeBenefitSetupSecurity
}

type UpdateOrAddEmployeeBenefitSetupResponse struct {
	ContentType string
	StatusCode  int64
	Errors      []shared.Error
}
