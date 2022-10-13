package shared

type EmployeeAdditionalDirectDeposit struct {
	AccountNumber *string  `json:"accountNumber"`
	AccountType   *string  `json:"accountType"`
	Amount        *float64 `json:"amount"`
	AmountType    *string  `json:"amountType"`
	BlockSpecial  *bool    `json:"blockSpecial"`
	IsSkipPreNote *bool    `json:"isSkipPreNote"`
	NameOnAccount *string  `json:"nameOnAccount"`
	PreNoteDate   *string  `json:"preNoteDate"`
	RoutingNumber *string  `json:"routingNumber"`
}

type EmployeeAdditionalRate struct {
	ChangeReason  *string  `json:"changeReason"`
	CostCenter1   *string  `json:"costCenter1"`
	CostCenter2   *string  `json:"costCenter2"`
	CostCenter3   *string  `json:"costCenter3"`
	EffectiveDate *string  `json:"effectiveDate"`
	EndCheckDate  *string  `json:"endCheckDate"`
	Job           *string  `json:"job"`
	Rate          *float64 `json:"rate"`
	RateCode      *string  `json:"rateCode"`
	RateNotes     *string  `json:"rateNotes"`
	RatePer       *string  `json:"ratePer"`
	Shift         *string  `json:"shift"`
}

type EmployeeBenefitSetup struct {
	BenefitClass                   *string  `json:"benefitClass"`
	BenefitClassEffectiveDate      *string  `json:"benefitClassEffectiveDate"`
	BenefitSalary                  *float64 `json:"benefitSalary"`
	BenefitSalaryEffectiveDate     *string  `json:"benefitSalaryEffectiveDate"`
	DoNotApplyAdministrativePeriod *bool    `json:"doNotApplyAdministrativePeriod"`
	IsMeasureAcaEligibility        *bool    `json:"isMeasureAcaEligibility"`
}

type EmployeeCustomBooleanFieldsCategoryEnum string

const (
	EmployeeCustomBooleanFieldsCategoryEnumPayrollAndHr EmployeeCustomBooleanFieldsCategoryEnum = "PayrollAndHR"
)

type EmployeeCustomBooleanFields struct {
	Category EmployeeCustomBooleanFieldsCategoryEnum `json:"category"`
	Label    string                                  `json:"label"`
	Value    bool                                    `json:"value"`
}

type EmployeeCustomDateFieldsCategoryEnum string

const (
	EmployeeCustomDateFieldsCategoryEnumPayrollAndHr EmployeeCustomDateFieldsCategoryEnum = "PayrollAndHR"
)

type EmployeeCustomDateFields struct {
	Category EmployeeCustomDateFieldsCategoryEnum `json:"category"`
	Label    string                               `json:"label"`
	Value    string                               `json:"value"`
}

type EmployeeCustomDropDownFieldsCategoryEnum string

const (
	EmployeeCustomDropDownFieldsCategoryEnumPayrollAndHr EmployeeCustomDropDownFieldsCategoryEnum = "PayrollAndHR"
)

type EmployeeCustomDropDownFields struct {
	Category EmployeeCustomDropDownFieldsCategoryEnum `json:"category"`
	Label    string                                   `json:"label"`
	Value    string                                   `json:"value"`
}

type EmployeeCustomNumberFieldsCategoryEnum string

const (
	EmployeeCustomNumberFieldsCategoryEnumPayrollAndHr EmployeeCustomNumberFieldsCategoryEnum = "PayrollAndHR"
)

type EmployeeCustomNumberFields struct {
	Category EmployeeCustomNumberFieldsCategoryEnum `json:"category"`
	Label    string                                 `json:"label"`
	Value    float64                                `json:"value"`
}

type EmployeeCustomTextFieldsCategoryEnum string

const (
	EmployeeCustomTextFieldsCategoryEnumPayrollAndHr EmployeeCustomTextFieldsCategoryEnum = "PayrollAndHR"
)

type EmployeeCustomTextFields struct {
	Category EmployeeCustomTextFieldsCategoryEnum `json:"category"`
	Label    string                               `json:"label"`
	Value    string                               `json:"value"`
}

type EmployeeDepartmentPosition struct {
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
	ReviewerCompanyNumber           *string `json:"reviewerCompanyNumber"`
	ReviewerEmployeeID              *string `json:"reviewerEmployeeId"`
	Shift                           *string `json:"shift"`
	SupervisorCompanyNumber         *string `json:"supervisorCompanyNumber"`
	SupervisorEmployeeID            *string `json:"supervisorEmployeeId"`
	Tipped                          *string `json:"tipped"`
	UnionAffiliationDate            *string `json:"unionAffiliationDate"`
	UnionCode                       *string `json:"unionCode"`
	UnionPosition                   *string `json:"unionPosition"`
	WorkersCompensation             *string `json:"workersCompensation"`
}

type EmployeeEmergencyContacts struct {
	Address1         *string `json:"address1"`
	Address2         *string `json:"address2"`
	City             *string `json:"city"`
	Country          *string `json:"country"`
	County           *string `json:"county"`
	Email            *string `json:"email"`
	FirstName        string  `json:"firstName"`
	HomePhone        *string `json:"homePhone"`
	LastName         string  `json:"lastName"`
	MobilePhone      *string `json:"mobilePhone"`
	Notes            *string `json:"notes"`
	Pager            *string `json:"pager"`
	PrimaryPhone     *string `json:"primaryPhone"`
	Priority         *string `json:"priority"`
	Relationship     *string `json:"relationship"`
	State            *string `json:"state"`
	SyncEmployeeInfo *bool   `json:"syncEmployeeInfo"`
	WorkExtension    *string `json:"workExtension"`
	WorkPhone        *string `json:"workPhone"`
	Zip              *string `json:"zip"`
}

type EmployeeFederalTax struct {
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

type EmployeeHomeAddress struct {
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

type EmployeeLocalTax struct {
	Exemptions   *float64 `json:"exemptions"`
	Exemptions2  *float64 `json:"exemptions2"`
	FilingStatus *string  `json:"filingStatus"`
	ResidentPsd  *string  `json:"residentPSD"`
	TaxCode      *string  `json:"taxCode"`
	WorkPsd      *string  `json:"workPSD"`
}

type EmployeeMainDirectDeposit struct {
	AccountNumber *string `json:"accountNumber"`
	AccountType   *string `json:"accountType"`
	BlockSpecial  *bool   `json:"blockSpecial"`
	IsSkipPreNote *bool   `json:"isSkipPreNote"`
	NameOnAccount *string `json:"nameOnAccount"`
	PreNoteDate   *string `json:"preNoteDate"`
	RoutingNumber *string `json:"routingNumber"`
}

type EmployeeNonPrimaryStateTax struct {
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

type EmployeePrimaryPayRate struct {
	AnnualSalary   *float64 `json:"annualSalary"`
	BaseRate       *float64 `json:"baseRate"`
	BeginCheckDate *string  `json:"beginCheckDate"`
	ChangeReason   *string  `json:"changeReason"`
	DefaultHours   *float64 `json:"defaultHours"`
	EffectiveDate  *string  `json:"effectiveDate"`
	IsAutoPay      *bool    `json:"isAutoPay"`
	PayFrequency   *string  `json:"payFrequency"`
	PayGrade       *string  `json:"payGrade"`
	PayRateNote    *string  `json:"payRateNote"`
	PayType        *string  `json:"payType"`
	RatePer        *string  `json:"ratePer"`
	Salary         *float64 `json:"salary"`
}

type EmployeePrimaryStateTax struct {
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

type EmployeeStatus struct {
	AdjustedSeniorityDate *string `json:"adjustedSeniorityDate"`
	ChangeReason          *string `json:"changeReason"`
	EffectiveDate         *string `json:"effectiveDate"`
	EmployeeStatus        *string `json:"employeeStatus"`
	HireDate              *string `json:"hireDate"`
	IsEligibleForRehire   *bool   `json:"isEligibleForRehire"`
	ReHireDate            *string `json:"reHireDate"`
}

type EmployeeTaxSetup struct {
	FitwExemptNotes          *string `json:"fitwExemptNotes"`
	FitwExemptReason         *string `json:"fitwExemptReason"`
	FutaExemptNotes          *string `json:"futaExemptNotes"`
	FutaExemptReason         *string `json:"futaExemptReason"`
	IsEmployee943            *bool   `json:"isEmployee943"`
	IsPension                *bool   `json:"isPension"`
	IsStatutory              *bool   `json:"isStatutory"`
	MedExemptNotes           *string `json:"medExemptNotes"`
	MedExemptReason          *string `json:"medExemptReason"`
	SitwExemptNotes          *string `json:"sitwExemptNotes"`
	SitwExemptReason         *string `json:"sitwExemptReason"`
	SsExemptNotes            *string `json:"ssExemptNotes"`
	SsExemptReason           *string `json:"ssExemptReason"`
	SuiExemptNotes           *string `json:"suiExemptNotes"`
	SuiExemptReason          *string `json:"suiExemptReason"`
	SuiState                 *string `json:"suiState"`
	TaxDistributionCode1099R *string `json:"taxDistributionCode1099R"`
	TaxForm                  *string `json:"taxForm"`
}

type EmployeeWebTime struct {
	BadgeNumber        *string  `json:"badgeNumber"`
	ChargeRate         *float64 `json:"chargeRate"`
	IsTimeLaborEnabled *bool    `json:"isTimeLaborEnabled"`
}

type EmployeeWorkAddress struct {
	Address1       *string `json:"address1"`
	Address2       *string `json:"address2"`
	City           *string `json:"city"`
	Country        *string `json:"country"`
	County         *string `json:"county"`
	EmailAddress   *string `json:"emailAddress"`
	Location       *string `json:"location"`
	MailStop       *string `json:"mailStop"`
	MobilePhone    *string `json:"mobilePhone"`
	Pager          *string `json:"pager"`
	Phone          *string `json:"phone"`
	PhoneExtension *string `json:"phoneExtension"`
	PostalCode     *string `json:"postalCode"`
	State          *string `json:"state"`
}

type EmployeeWorkEligibility struct {
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

type Employee struct {
	AdditionalDirectDeposit []EmployeeAdditionalDirectDeposit `json:"additionalDirectDeposit"`
	AdditionalRate          []EmployeeAdditionalRate          `json:"additionalRate"`
	BenefitSetup            *EmployeeBenefitSetup             `json:"benefitSetup"`
	BirthDate               *string                           `json:"birthDate"`
	CompanyFein             *string                           `json:"companyFEIN"`
	CompanyName             *string                           `json:"companyName"`
	Currency                *string                           `json:"currency"`
	CustomBooleanFields     []EmployeeCustomBooleanFields     `json:"customBooleanFields"`
	CustomDateFields        []EmployeeCustomDateFields        `json:"customDateFields"`
	CustomDropDownFields    []EmployeeCustomDropDownFields    `json:"customDropDownFields"`
	CustomNumberFields      []EmployeeCustomNumberFields      `json:"customNumberFields"`
	CustomTextFields        []EmployeeCustomTextFields        `json:"customTextFields"`
	DepartmentPosition      *EmployeeDepartmentPosition       `json:"departmentPosition"`
	DisabilityDescription   *string                           `json:"disabilityDescription"`
	EmergencyContacts       []EmployeeEmergencyContacts       `json:"emergencyContacts"`
	EmployeeID              *string                           `json:"employeeId"`
	Ethnicity               *string                           `json:"ethnicity"`
	FederalTax              *EmployeeFederalTax               `json:"federalTax"`
	FirstName               *string                           `json:"firstName"`
	Gender                  *string                           `json:"gender"`
	HomeAddress             *EmployeeHomeAddress              `json:"homeAddress"`
	IsHighlyCompensated     *bool                             `json:"isHighlyCompensated"`
	IsSmoker                *bool                             `json:"isSmoker"`
	LastName                *string                           `json:"lastName"`
	LocalTax                []EmployeeLocalTax                `json:"localTax"`
	MainDirectDeposit       *EmployeeMainDirectDeposit        `json:"mainDirectDeposit"`
	MaritalStatus           *string                           `json:"maritalStatus"`
	MiddleName              *string                           `json:"middleName"`
	NonPrimaryStateTax      *EmployeeNonPrimaryStateTax       `json:"nonPrimaryStateTax"`
	OwnerPercent            *float64                          `json:"ownerPercent"`
	PreferredName           *string                           `json:"preferredName"`
	PrimaryPayRate          *EmployeePrimaryPayRate           `json:"primaryPayRate"`
	PrimaryStateTax         *EmployeePrimaryStateTax          `json:"primaryStateTax"`
	PriorLastName           *string                           `json:"priorLastName"`
	Salutation              *string                           `json:"salutation"`
	Ssn                     *string                           `json:"ssn"`
	Status                  *EmployeeStatus                   `json:"status"`
	Suffix                  *string                           `json:"suffix"`
	TaxSetup                *EmployeeTaxSetup                 `json:"taxSetup"`
	VeteranDescription      *string                           `json:"veteranDescription"`
	WebTime                 *EmployeeWebTime                  `json:"webTime"`
	WorkAddress             *EmployeeWorkAddress              `json:"workAddress"`
	WorkEligibility         *EmployeeWorkEligibility          `json:"workEligibility"`
}
