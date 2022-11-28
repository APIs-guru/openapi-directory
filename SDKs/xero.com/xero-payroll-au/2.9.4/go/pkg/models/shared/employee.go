package shared

type EmployeeGenderEnum string

const (
	EmployeeGenderEnumN EmployeeGenderEnum = "N"
	EmployeeGenderEnumM EmployeeGenderEnum = "M"
	EmployeeGenderEnumF EmployeeGenderEnum = "F"
	EmployeeGenderEnumI EmployeeGenderEnum = "I"
)

type Employee struct {
	BankAccounts                    []BankAccount       `json:"BankAccounts,omitempty"`
	Classification                  *string             `json:"Classification,omitempty"`
	DateOfBirth                     string              `json:"DateOfBirth"`
	Email                           *string             `json:"Email,omitempty"`
	EmployeeGroupName               *string             `json:"EmployeeGroupName,omitempty"`
	EmployeeID                      *string             `json:"EmployeeID,omitempty"`
	FirstName                       string              `json:"FirstName"`
	Gender                          *EmployeeGenderEnum `json:"Gender,omitempty"`
	HomeAddress                     *HomeAddress        `json:"HomeAddress,omitempty"`
	IsAuthorisedToApproveLeave      *bool               `json:"IsAuthorisedToApproveLeave,omitempty"`
	IsAuthorisedToApproveTimesheets *bool               `json:"IsAuthorisedToApproveTimesheets,omitempty"`
	JobTitle                        *string             `json:"JobTitle,omitempty"`
	LastName                        string              `json:"LastName"`
	LeaveBalances                   []LeaveBalance      `json:"LeaveBalances,omitempty"`
	LeaveLines                      []LeaveLine         `json:"LeaveLines,omitempty"`
	MiddleNames                     *string             `json:"MiddleNames,omitempty"`
	Mobile                          *string             `json:"Mobile,omitempty"`
	OpeningBalances                 *OpeningBalances    `json:"OpeningBalances,omitempty"`
	OrdinaryEarningsRateID          *string             `json:"OrdinaryEarningsRateID,omitempty"`
	PayTemplate                     *PayTemplate        `json:"PayTemplate,omitempty"`
	PayrollCalendarID               *string             `json:"PayrollCalendarID,omitempty"`
	Phone                           *string             `json:"Phone,omitempty"`
	StartDate                       *string             `json:"StartDate,omitempty"`
	Status                          *EmployeeStatusEnum `json:"Status,omitempty"`
	SuperMemberships                []SuperMembership   `json:"SuperMemberships,omitempty"`
	TaxDeclaration                  *TaxDeclaration     `json:"TaxDeclaration,omitempty"`
	TerminationDate                 *string             `json:"TerminationDate,omitempty"`
	Title                           *string             `json:"Title,omitempty"`
	TwitterUserName                 *string             `json:"TwitterUserName,omitempty"`
	UpdatedDateUtc                  *string             `json:"UpdatedDateUTC,omitempty"`
	ValidationErrors                []ValidationError   `json:"ValidationErrors,omitempty"`
}

type EmployeeInput struct {
	BankAccounts                    []BankAccount        `json:"BankAccounts,omitempty"`
	Classification                  *string              `json:"Classification,omitempty"`
	DateOfBirth                     string               `json:"DateOfBirth"`
	Email                           *string              `json:"Email,omitempty"`
	EmployeeGroupName               *string              `json:"EmployeeGroupName,omitempty"`
	EmployeeID                      *string              `json:"EmployeeID,omitempty"`
	FirstName                       string               `json:"FirstName"`
	Gender                          *EmployeeGenderEnum  `json:"Gender,omitempty"`
	HomeAddress                     *HomeAddress         `json:"HomeAddress,omitempty"`
	IsAuthorisedToApproveLeave      *bool                `json:"IsAuthorisedToApproveLeave,omitempty"`
	IsAuthorisedToApproveTimesheets *bool                `json:"IsAuthorisedToApproveTimesheets,omitempty"`
	JobTitle                        *string              `json:"JobTitle,omitempty"`
	LastName                        string               `json:"LastName"`
	LeaveBalances                   []LeaveBalance       `json:"LeaveBalances,omitempty"`
	LeaveLines                      []LeaveLine          `json:"LeaveLines,omitempty"`
	MiddleNames                     *string              `json:"MiddleNames,omitempty"`
	Mobile                          *string              `json:"Mobile,omitempty"`
	OpeningBalances                 *OpeningBalances     `json:"OpeningBalances,omitempty"`
	OrdinaryEarningsRateID          *string              `json:"OrdinaryEarningsRateID,omitempty"`
	PayTemplate                     *PayTemplate         `json:"PayTemplate,omitempty"`
	PayrollCalendarID               *string              `json:"PayrollCalendarID,omitempty"`
	Phone                           *string              `json:"Phone,omitempty"`
	StartDate                       *string              `json:"StartDate,omitempty"`
	Status                          *EmployeeStatusEnum  `json:"Status,omitempty"`
	SuperMemberships                []SuperMembership    `json:"SuperMemberships,omitempty"`
	TaxDeclaration                  *TaxDeclarationInput `json:"TaxDeclaration,omitempty"`
	TerminationDate                 *string              `json:"TerminationDate,omitempty"`
	Title                           *string              `json:"Title,omitempty"`
	TwitterUserName                 *string              `json:"TwitterUserName,omitempty"`
	ValidationErrors                []ValidationError    `json:"ValidationErrors,omitempty"`
}
