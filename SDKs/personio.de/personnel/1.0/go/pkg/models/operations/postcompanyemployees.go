package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type PostCompanyEmployeesRequestBodyEmployeeGenderEnum string

const (
	PostCompanyEmployeesRequestBodyEmployeeGenderEnumMale    PostCompanyEmployeesRequestBodyEmployeeGenderEnum = "male"
	PostCompanyEmployeesRequestBodyEmployeeGenderEnumFemale  PostCompanyEmployeesRequestBodyEmployeeGenderEnum = "female"
	PostCompanyEmployeesRequestBodyEmployeeGenderEnumDiverse PostCompanyEmployeesRequestBodyEmployeeGenderEnum = "diverse"
)

type PostCompanyEmployeesRequestBody struct {
	EmployeeDepartment  *string                                            `form:"name=employee[department]"`
	EmployeeEmail       string                                             `form:"name=employee[email]"`
	EmployeeFirstName   string                                             `form:"name=employee[first_name]"`
	EmployeeGender      *PostCompanyEmployeesRequestBodyEmployeeGenderEnum `form:"name=employee[gender]"`
	EmployeeHireDate    *time.Time                                         `form:"name=employee[hire_date]"`
	EmployeeLastName    string                                             `form:"name=employee[last_name]"`
	EmployeePosition    *string                                            `form:"name=employee[position]"`
	EmployeeWeeklyHours *float64                                           `form:"name=employee[weekly_hours]"`
}

type PostCompanyEmployeesRequest struct {
	Request PostCompanyEmployeesRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
}

type PostCompanyEmployeesResponse struct {
	ContentType string
	Response    *shared.Response
	StatusCode  int64
}
