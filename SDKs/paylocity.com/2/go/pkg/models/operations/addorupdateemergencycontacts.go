package operations

import (
	"openapi/pkg/models/shared"
)

type AddOrUpdateEmergencyContactsPathParams struct {
	CompanyID  string `pathParam:"style=simple,explode=false,name=companyId"`
	EmployeeID string `pathParam:"style=simple,explode=false,name=employeeId"`
}

type AddOrUpdateEmergencyContactsSecurity struct {
	PaylocityAuth shared.SchemePaylocityAuth `security:"scheme,type=oauth2"`
}

type AddOrUpdateEmergencyContactsRequest struct {
	PathParams AddOrUpdateEmergencyContactsPathParams
	Request    shared.EmergencyContact `request:"mediaType=application/json"`
	Security   AddOrUpdateEmergencyContactsSecurity
}

type AddOrUpdateEmergencyContactsResponse struct {
	ContentType string
	StatusCode  int64
	Errors      []shared.Error
}
