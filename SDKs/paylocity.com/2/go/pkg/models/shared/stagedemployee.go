package shared

type StagedEmployeeAdditionalDirectDeposit struct {
	AccountNumber *string  `json:"accountNumber"`
	AccountType   *string  `json:"accountType"`
	Amount        *float64 `json:"amount"`
	AmountType    *string  `json:"amountType"`
	IsSkipPreNote *bool    `json:"isSkipPreNote"`
	PreNoteDate   *string  `json:"preNoteDate"`
	RoutingNumber *string  `json:"routingNumber"`
}

type StagedEmployeeBenefitSetup struct {
	BenefitClass                   *string  `json:"benefitClass"`
	BenefitClassEffectiveDate      *string  `json:"benefitClassEffectiveDate"`
	BenefitSalary                  *float64 `json:"benefitSalary"`
	BenefitSalaryEffectiveDate     *string  `json:"benefitSalaryEffectiveDate"`
	DoNotApplyAdministrativePeriod *bool    `json:"doNotApplyAdministrativePeriod"`
	IsMeasureAcaEligibility        *bool    `json:"isMeasureAcaEligibility"`
}

type StagedEmployeeCustomBooleanFieldsCategoryEnum string

const (
	StagedEmployeeCustomBooleanFieldsCategoryEnumPayrollAndHr StagedEmployeeCustomBooleanFieldsCategoryEnum = "PayrollAndHR"
)

type StagedEmployeeCustomBooleanFields struct {
	Category StagedEmployeeCustomBooleanFieldsCategoryEnum `json:"category"`
	Label    string                                        `json:"label"`
	Value    bool                                          `json:"value"`
}

type StagedEmployeeCustomDateFieldsCategoryEnum string

const (
	StagedEmployeeCustomDateFieldsCategoryEnumPayrollAndHr StagedEmployeeCustomDateFieldsCategoryEnum = "PayrollAndHR"
)

type StagedEmployeeCustomDateFields struct {
	Category StagedEmployeeCustomDateFieldsCategoryEnum `json:"category"`
	Label    string                                     `json:"label"`
	Value    string                                     `json:"value"`
}

type StagedEmployeeCustomDropDownFieldsCategoryEnum string

const (
	StagedEmployeeCustomDropDownFieldsCategoryEnumPayrollAndHr StagedEmployeeCustomDropDownFieldsCategoryEnum = "PayrollAndHR"
)

type StagedEmployeeCustomDropDownFields struct {
	Category StagedEmployeeCustomDropDownFieldsCategoryEnum `json:"category"`
	Label    string                                         `json:"label"`
	Value    string                                         `json:"value"`
}

type StagedEmployeeCustomNumberFieldsCategoryEnum string

const (
	StagedEmployeeCustomNumberFieldsCategoryEnumPayrollAndHr StagedEmployeeCustomNumberFieldsCategoryEnum = "PayrollAndHR"
)

type StagedEmployeeCustomNumberFields struct {
	Category StagedEmployeeCustomNumberFieldsCategoryEnum `json:"category"`
	Label    string                                       `json:"label"`
	Value    float64                                      `json:"value"`
}

type StagedEmployeeCustomTextFieldsCategoryEnum string

const (
	StagedEmployeeCustomTextFieldsCategoryEnumPayrollAndHr StagedEmployeeCustomTextFieldsCategoryEnum = "PayrollAndHR"
)

type StagedEmployeeCustomTextFields struct {
	Category StagedEmployeeCustomTextFieldsCategoryEnum `json:"category"`
	Label    string                                     `json:"label"`
	Value    string                                     `json:"value"`
}

type StagedEmployeeDepartmentPosition struct {
	ChangeReason                    *string `json:"changeReason"`
	ClockBadgeNumber                *string `json:"clockBadgeNumber"`
	CostCenter1                     *string `json:"costCenter1"`
	CostCenter2                     *string `json:"costCenter2"`
	CostCenter3                     *string `json:"costCenter3"`
	EffectiveDate                   *string `json:"effectiveDate"`
	EmployeeType                    *string `json:"employeeType"`
	EqualEmploymentOpportunityClass *string `json:"equalEmploymentOpportunityClass"`
	IsMinimumWageExempt             *bool   `json:"isMinimumWageExempt"`
	IsOvertimeExempt                *bool   `json:"isOvertimeExempt"`
	IsSupervisorReviewer            *bool   `json:"isSupervisorReviewer"`
	IsUnionDuesCollected            *bool   `json:"isUnionDuesCollected"`
	IsUnionInitiationCollected      *bool   `json:"isUnionInitiationCollected"`
	JobTitle                        *string `json:"jobTitle"`
	PayGroup                        *string `json:"payGroup"`
	PositionCode                    *string `json:"positionCode"`
	Shift                           *string `json:"shift"`
	SupervisorCompanyNumber         *string `json:"supervisorCompanyNumber"`
	SupervisorEmployeeID            *string `json:"supervisorEmployeeId"`
	Tipped                          *string `json:"tipped"`
	UnionAffiliationDate            *string `json:"unionAffiliationDate"`
	UnionCode                       *string `json:"unionCode"`
	UnionPosition                   *string `json:"unionPosition"`
	WorkersCompensation             *string `json:"workersCompensation"`
}

type StagedEmployeeFederalTax struct {
	Amount             *float64 `json:"amount"`
	DeductionsAmount   *float64 `json:"deductionsAmount"`
	DependentsAmount   *float64 `json:"dependentsAmount"`
	Exemptions         *float64 `json:"exemptions"`
	FilingStatus       *string  `json:"filingStatus"`
	HigherRate         *bool    `json:"higherRate"`
	OtherIncomeAmount  *float64 `json:"otherIncomeAmount"`
	Percentage         *float64 `json:"percentage"`
	TaxCalculationCode *string  `json:"taxCalculationCode"`
	W4FormYear         *int64   `json:"w4FormYear"`
}

type StagedEmployeeHomeAddress struct {
	Address1     *string `json:"address1"`
	Address2     *string `json:"address2"`
	City         *string `json:"city"`
	Country      *string `json:"country"`
	County       *string `json:"county"`
	EmailAddress *string `json:"emailAddress"`
	MobilePhone  *string `json:"mobilePhone"`
	Phone        *string `json:"phone"`
	PostalCode   *string `json:"postalCode"`
	State        *string `json:"state"`
}

type StagedEmployeeLocalTax struct {
	Exemptions   *float64 `json:"exemptions"`
	Exemptions2  *float64 `json:"exemptions2"`
	FilingStatus *string  `json:"filingStatus"`
	ResidentPsd  *string  `json:"residentPSD"`
	TaxCode      *string  `json:"taxCode"`
	WorkPsd      *string  `json:"workPSD"`
}

type StagedEmployeeMainDirectDeposit struct {
	AccountNumber *string `json:"accountNumber"`
	AccountType   *string `json:"accountType"`
	IsSkipPreNote *bool   `json:"isSkipPreNote"`
	PreNoteDate   *string `json:"preNoteDate"`
	RoutingNumber *string `json:"routingNumber"`
}

type StagedEmployeeNonPrimaryStateTax struct {
	Amount             *float64 `json:"amount"`
	DeductionsAmount   *float64 `json:"deductionsAmount"`
	DependentsAmount   *float64 `json:"dependentsAmount"`
	Exemptions         *float64 `json:"exemptions"`
	Exemptions2        *float64 `json:"exemptions2"`
	FilingStatus       *string  `json:"filingStatus"`
	HigherRate         *bool    `json:"higherRate"`
	OtherIncomeAmount  *float64 `json:"otherIncomeAmount"`
	Percentage         *float64 `json:"percentage"`
	ReciprocityCode    *string  `json:"reciprocityCode"`
	SpecialCheckCalc   *string  `json:"specialCheckCalc"`
	TaxCalculationCode *string  `json:"taxCalculationCode"`
	TaxCode            *string  `json:"taxCode"`
	W4FormYear         *int64   `json:"w4FormYear"`
}

type StagedEmployeePrimaryPayRate struct {
	BaseRate      *float64 `json:"baseRate"`
	ChangeReason  *string  `json:"changeReason"`
	DefaultHours  *float64 `json:"defaultHours"`
	EffectiveDate *string  `json:"effectiveDate"`
	IsAutoPay     *bool    `json:"isAutoPay"`
	PayFrequency  *string  `json:"payFrequency"`
	PayGrade      *string  `json:"payGrade"`
	PayType       *string  `json:"payType"`
	RatePer       *string  `json:"ratePer"`
	Salary        *float64 `json:"salary"`
}

type StagedEmployeePrimaryStateTax struct {
	Amount             *float64 `json:"amount"`
	DeductionsAmount   *float64 `json:"deductionsAmount"`
	DependentsAmount   *float64 `json:"dependentsAmount"`
	Exemptions         *float64 `json:"exemptions"`
	Exemptions2        *float64 `json:"exemptions2"`
	FilingStatus       *string  `json:"filingStatus"`
	HigherRate         *bool    `json:"higherRate"`
	OtherIncomeAmount  *float64 `json:"otherIncomeAmount"`
	Percentage         *float64 `json:"percentage"`
	SpecialCheckCalc   *string  `json:"specialCheckCalc"`
	TaxCalculationCode *string  `json:"taxCalculationCode"`
	TaxCode            *string  `json:"taxCode"`
	W4FormYear         *int64   `json:"w4FormYear"`
}

type StagedEmployeeStatus struct {
	AdjustedSeniorityDate *string `json:"adjustedSeniorityDate"`
	ChangeReason          *string `json:"changeReason"`
	EffectiveDate         *string `json:"effectiveDate"`
	EmployeeStatus        *string `json:"employeeStatus"`
	HireDate              *string `json:"hireDate"`
	IsEligibleForRehire   *bool   `json:"isEligibleForRehire"`
}

type StagedEmployeeWebTime struct {
	BadgeNumber        *string  `json:"badgeNumber"`
	ChargeRate         *float64 `json:"chargeRate"`
	IsTimeLaborEnabled *bool    `json:"isTimeLaborEnabled"`
}

type StagedEmployeeWorkAddress struct {
	Address1       *string `json:"address1"`
	Address2       *string `json:"address2"`
	City           *string `json:"city"`
	Country        *string `json:"country"`
	County         *string `json:"county"`
	EmailAddress   *string `json:"emailAddress"`
	MobilePhone    *string `json:"mobilePhone"`
	Pager          *string `json:"pager"`
	Phone          *string `json:"phone"`
	PhoneExtension *string `json:"phoneExtension"`
	PostalCode     *string `json:"postalCode"`
	State          *string `json:"state"`
}

type StagedEmployeeWorkEligibility struct {
	AlienOrAdmissionDocumentNumber *string `json:"alienOrAdmissionDocumentNumber"`
	AttestedDate                   *string `json:"attestedDate"`
	CountryOfIssuance              *string `json:"countryOfIssuance"`
	ForeignPassportNumber          *string `json:"foreignPassportNumber"`
	I94AdmissionNumber             *string `json:"i94AdmissionNumber"`
	I9DateVerified                 *string `json:"i9DateVerified"`
	I9Notes                        *string `json:"i9Notes"`
	IsI9Verified                   *bool   `json:"isI9Verified"`
	IsSsnVerified                  *bool   `json:"isSsnVerified"`
	SsnDateVerified                *string `json:"ssnDateVerified"`
	SsnNotes                       *string `json:"ssnNotes"`
	VisaType                       *string `json:"visaType"`
	WorkAuthorization              *string `json:"workAuthorization"`
	WorkUntil                      *string `json:"workUntil"`
}

type StagedEmployee struct {
	AdditionalDirectDeposit  []StagedEmployeeAdditionalDirectDeposit `json:"additionalDirectDeposit"`
	BenefitSetup             []StagedEmployeeBenefitSetup            `json:"benefitSetup"`
	BirthDate                *string                                 `json:"birthDate"`
	CustomBooleanFields      []StagedEmployeeCustomBooleanFields     `json:"customBooleanFields"`
	CustomDateFields         []StagedEmployeeCustomDateFields        `json:"customDateFields"`
	CustomDropDownFields     []StagedEmployeeCustomDropDownFields    `json:"customDropDownFields"`
	CustomNumberFields       []StagedEmployeeCustomNumberFields      `json:"customNumberFields"`
	CustomTextFields         []StagedEmployeeCustomTextFields        `json:"customTextFields"`
	DepartmentPosition       []StagedEmployeeDepartmentPosition      `json:"departmentPosition"`
	DisabilityDescription    *string                                 `json:"disabilityDescription"`
	EmployeeID               *string                                 `json:"employeeId"`
	Ethnicity                *string                                 `json:"ethnicity"`
	FederalTax               []StagedEmployeeFederalTax              `json:"federalTax"`
	FirstName                *string                                 `json:"firstName"`
	FitwExemptReason         *string                                 `json:"fitwExemptReason"`
	FutaExemptReason         *string                                 `json:"futaExemptReason"`
	Gender                   *string                                 `json:"gender"`
	HomeAddress              []StagedEmployeeHomeAddress             `json:"homeAddress"`
	IsEmployee943            *bool                                   `json:"isEmployee943"`
	IsSmoker                 *bool                                   `json:"isSmoker"`
	LastName                 *string                                 `json:"lastName"`
	LocalTax                 []StagedEmployeeLocalTax                `json:"localTax"`
	MainDirectDeposit        []StagedEmployeeMainDirectDeposit       `json:"mainDirectDeposit"`
	MaritalStatus            *string                                 `json:"maritalStatus"`
	MedExemptReason          *string                                 `json:"medExemptReason"`
	MiddleName               *string                                 `json:"middleName"`
	NonPrimaryStateTax       []StagedEmployeeNonPrimaryStateTax      `json:"nonPrimaryStateTax"`
	PreferredName            *string                                 `json:"preferredName"`
	PrimaryPayRate           []StagedEmployeePrimaryPayRate          `json:"primaryPayRate"`
	PrimaryStateTax          []StagedEmployeePrimaryStateTax         `json:"primaryStateTax"`
	PriorLastName            *string                                 `json:"priorLastName"`
	Salutation               *string                                 `json:"salutation"`
	SitwExemptReason         *string                                 `json:"sitwExemptReason"`
	SsExemptReason           *string                                 `json:"ssExemptReason"`
	Ssn                      *string                                 `json:"ssn"`
	Status                   []StagedEmployeeStatus                  `json:"status"`
	Suffix                   *string                                 `json:"suffix"`
	SuiExemptReason          *string                                 `json:"suiExemptReason"`
	SuiState                 *string                                 `json:"suiState"`
	TaxDistributionCode1099R *string                                 `json:"taxDistributionCode1099R"`
	TaxForm                  *string                                 `json:"taxForm"`
	VeteranDescription       *string                                 `json:"veteranDescription"`
	WebTime                  *StagedEmployeeWebTime                  `json:"webTime"`
	WorkAddress              []StagedEmployeeWorkAddress             `json:"workAddress"`
	WorkEligibility          []StagedEmployeeWorkEligibility         `json:"workEligibility"`
}
