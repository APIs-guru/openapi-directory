package shared

type EmployeeGenderEnum string

const (
	EmployeeGenderEnumN EmployeeGenderEnum = "N"
	EmployeeGenderEnumM EmployeeGenderEnum = "M"
	EmployeeGenderEnumF EmployeeGenderEnum = "F"
	EmployeeGenderEnumI EmployeeGenderEnum = "I"
)

type Employee struct {
	BankAccounts                    []BankAccount       `json:"BankAccounts"`
	Classification                  *string             `json:"Classification"`
	DateOfBirth                     string              `json:"DateOfBirth"`
	Email                           *string             `json:"Email"`
	EmployeeGroupName               *string             `json:"EmployeeGroupName"`
	EmployeeID                      *string             `json:"EmployeeID"`
	FirstName                       string              `json:"FirstName"`
	Gender                          *EmployeeGenderEnum `json:"Gender"`
	HomeAddress                     *HomeAddress        `json:"HomeAddress"`
	IsAuthorisedToApproveLeave      *bool               `json:"IsAuthorisedToApproveLeave"`
	IsAuthorisedToApproveTimesheets *bool               `json:"IsAuthorisedToApproveTimesheets"`
	JobTitle                        *string             `json:"JobTitle"`
	LastName                        string              `json:"LastName"`
	LeaveBalances                   []LeaveBalance      `json:"LeaveBalances"`
	LeaveLines                      []LeaveLine         `json:"LeaveLines"`
	MiddleNames                     *string             `json:"MiddleNames"`
	Mobile                          *string             `json:"Mobile"`
	OpeningBalances                 *OpeningBalances    `json:"OpeningBalances"`
	OrdinaryEarningsRateID          *string             `json:"OrdinaryEarningsRateID"`
	PayTemplate                     *PayTemplate        `json:"PayTemplate"`
	PayrollCalendarID               *string             `json:"PayrollCalendarID"`
	Phone                           *string             `json:"Phone"`
	StartDate                       *string             `json:"StartDate"`
	Status                          *EmployeeStatusEnum `json:"Status"`
	SuperMemberships                []SuperMembership   `json:"SuperMemberships"`
	TaxDeclaration                  *TaxDeclaration     `json:"TaxDeclaration"`
	TerminationDate                 *string             `json:"TerminationDate"`
	Title                           *string             `json:"Title"`
	TwitterUserName                 *string             `json:"TwitterUserName"`
	UpdatedDateUtc                  *string             `json:"UpdatedDateUTC"`
	ValidationErrors                []ValidationError   `json:"ValidationErrors"`
}
