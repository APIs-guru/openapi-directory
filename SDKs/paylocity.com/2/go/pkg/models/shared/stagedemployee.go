package shared



type StagedEmployeeAdditionalDirectDeposit struct {
    AccountNumber *string `json:"accountNumber,omitempty"`
    AccountType *string `json:"accountType,omitempty"`
    Amount *float64 `json:"amount,omitempty"`
    AmountType *string `json:"amountType,omitempty"`
    IsSkipPreNote *bool `json:"isSkipPreNote,omitempty"`
    PreNoteDate *string `json:"preNoteDate,omitempty"`
    RoutingNumber *string `json:"routingNumber,omitempty"`
    
}

type StagedEmployeeBenefitSetup struct {
    BenefitClass *string `json:"benefitClass,omitempty"`
    BenefitClassEffectiveDate *string `json:"benefitClassEffectiveDate,omitempty"`
    BenefitSalary *float64 `json:"benefitSalary,omitempty"`
    BenefitSalaryEffectiveDate *string `json:"benefitSalaryEffectiveDate,omitempty"`
    DoNotApplyAdministrativePeriod *bool `json:"doNotApplyAdministrativePeriod,omitempty"`
    IsMeasureAcaEligibility *bool `json:"isMeasureAcaEligibility,omitempty"`
    
}


type StagedEmployeeCustomBooleanFieldsCategoryEnum string

const (
    StagedEmployeeCustomBooleanFieldsCategoryEnumPayrollAndHr StagedEmployeeCustomBooleanFieldsCategoryEnum = "PayrollAndHR"
)


type StagedEmployeeCustomBooleanFields struct {
    Category StagedEmployeeCustomBooleanFieldsCategoryEnum `json:"category"`
    Label string `json:"label"`
    Value bool `json:"value"`
    
}


type StagedEmployeeCustomDateFieldsCategoryEnum string

const (
    StagedEmployeeCustomDateFieldsCategoryEnumPayrollAndHr StagedEmployeeCustomDateFieldsCategoryEnum = "PayrollAndHR"
)


type StagedEmployeeCustomDateFields struct {
    Category StagedEmployeeCustomDateFieldsCategoryEnum `json:"category"`
    Label string `json:"label"`
    Value string `json:"value"`
    
}


type StagedEmployeeCustomDropDownFieldsCategoryEnum string

const (
    StagedEmployeeCustomDropDownFieldsCategoryEnumPayrollAndHr StagedEmployeeCustomDropDownFieldsCategoryEnum = "PayrollAndHR"
)


type StagedEmployeeCustomDropDownFields struct {
    Category StagedEmployeeCustomDropDownFieldsCategoryEnum `json:"category"`
    Label string `json:"label"`
    Value string `json:"value"`
    
}


type StagedEmployeeCustomNumberFieldsCategoryEnum string

const (
    StagedEmployeeCustomNumberFieldsCategoryEnumPayrollAndHr StagedEmployeeCustomNumberFieldsCategoryEnum = "PayrollAndHR"
)


type StagedEmployeeCustomNumberFields struct {
    Category StagedEmployeeCustomNumberFieldsCategoryEnum `json:"category"`
    Label string `json:"label"`
    Value float64 `json:"value"`
    
}


type StagedEmployeeCustomTextFieldsCategoryEnum string

const (
    StagedEmployeeCustomTextFieldsCategoryEnumPayrollAndHr StagedEmployeeCustomTextFieldsCategoryEnum = "PayrollAndHR"
)


type StagedEmployeeCustomTextFields struct {
    Category StagedEmployeeCustomTextFieldsCategoryEnum `json:"category"`
    Label string `json:"label"`
    Value string `json:"value"`
    
}

type StagedEmployeeDepartmentPosition struct {
    ChangeReason *string `json:"changeReason,omitempty"`
    ClockBadgeNumber *string `json:"clockBadgeNumber,omitempty"`
    CostCenter1 *string `json:"costCenter1,omitempty"`
    CostCenter2 *string `json:"costCenter2,omitempty"`
    CostCenter3 *string `json:"costCenter3,omitempty"`
    EffectiveDate *string `json:"effectiveDate,omitempty"`
    EmployeeType *string `json:"employeeType,omitempty"`
    EqualEmploymentOpportunityClass *string `json:"equalEmploymentOpportunityClass,omitempty"`
    IsMinimumWageExempt *bool `json:"isMinimumWageExempt,omitempty"`
    IsOvertimeExempt *bool `json:"isOvertimeExempt,omitempty"`
    IsSupervisorReviewer *bool `json:"isSupervisorReviewer,omitempty"`
    IsUnionDuesCollected *bool `json:"isUnionDuesCollected,omitempty"`
    IsUnionInitiationCollected *bool `json:"isUnionInitiationCollected,omitempty"`
    JobTitle *string `json:"jobTitle,omitempty"`
    PayGroup *string `json:"payGroup,omitempty"`
    PositionCode *string `json:"positionCode,omitempty"`
    Shift *string `json:"shift,omitempty"`
    SupervisorCompanyNumber *string `json:"supervisorCompanyNumber,omitempty"`
    SupervisorEmployeeID *string `json:"supervisorEmployeeId,omitempty"`
    Tipped *string `json:"tipped,omitempty"`
    UnionAffiliationDate *string `json:"unionAffiliationDate,omitempty"`
    UnionCode *string `json:"unionCode,omitempty"`
    UnionPosition *string `json:"unionPosition,omitempty"`
    WorkersCompensation *string `json:"workersCompensation,omitempty"`
    
}

type StagedEmployeeFederalTax struct {
    Amount *float64 `json:"amount,omitempty"`
    DeductionsAmount *float64 `json:"deductionsAmount,omitempty"`
    DependentsAmount *float64 `json:"dependentsAmount,omitempty"`
    Exemptions *float64 `json:"exemptions,omitempty"`
    FilingStatus *string `json:"filingStatus,omitempty"`
    HigherRate *bool `json:"higherRate,omitempty"`
    OtherIncomeAmount *float64 `json:"otherIncomeAmount,omitempty"`
    Percentage *float64 `json:"percentage,omitempty"`
    TaxCalculationCode *string `json:"taxCalculationCode,omitempty"`
    W4FormYear *int64 `json:"w4FormYear,omitempty"`
    
}

type StagedEmployeeHomeAddress struct {
    Address1 *string `json:"address1,omitempty"`
    Address2 *string `json:"address2,omitempty"`
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    County *string `json:"county,omitempty"`
    EmailAddress *string `json:"emailAddress,omitempty"`
    MobilePhone *string `json:"mobilePhone,omitempty"`
    Phone *string `json:"phone,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    State *string `json:"state,omitempty"`
    
}

type StagedEmployeeLocalTax struct {
    Exemptions *float64 `json:"exemptions,omitempty"`
    Exemptions2 *float64 `json:"exemptions2,omitempty"`
    FilingStatus *string `json:"filingStatus,omitempty"`
    ResidentPsd *string `json:"residentPSD,omitempty"`
    TaxCode *string `json:"taxCode,omitempty"`
    WorkPsd *string `json:"workPSD,omitempty"`
    
}

type StagedEmployeeMainDirectDeposit struct {
    AccountNumber *string `json:"accountNumber,omitempty"`
    AccountType *string `json:"accountType,omitempty"`
    IsSkipPreNote *bool `json:"isSkipPreNote,omitempty"`
    PreNoteDate *string `json:"preNoteDate,omitempty"`
    RoutingNumber *string `json:"routingNumber,omitempty"`
    
}

type StagedEmployeeNonPrimaryStateTax struct {
    Amount *float64 `json:"amount,omitempty"`
    DeductionsAmount *float64 `json:"deductionsAmount,omitempty"`
    DependentsAmount *float64 `json:"dependentsAmount,omitempty"`
    Exemptions *float64 `json:"exemptions,omitempty"`
    Exemptions2 *float64 `json:"exemptions2,omitempty"`
    FilingStatus *string `json:"filingStatus,omitempty"`
    HigherRate *bool `json:"higherRate,omitempty"`
    OtherIncomeAmount *float64 `json:"otherIncomeAmount,omitempty"`
    Percentage *float64 `json:"percentage,omitempty"`
    ReciprocityCode *string `json:"reciprocityCode,omitempty"`
    SpecialCheckCalc *string `json:"specialCheckCalc,omitempty"`
    TaxCalculationCode *string `json:"taxCalculationCode,omitempty"`
    TaxCode *string `json:"taxCode,omitempty"`
    W4FormYear *int64 `json:"w4FormYear,omitempty"`
    
}

type StagedEmployeePrimaryPayRate struct {
    BaseRate *float64 `json:"baseRate,omitempty"`
    ChangeReason *string `json:"changeReason,omitempty"`
    DefaultHours *float64 `json:"defaultHours,omitempty"`
    EffectiveDate *string `json:"effectiveDate,omitempty"`
    IsAutoPay *bool `json:"isAutoPay,omitempty"`
    PayFrequency *string `json:"payFrequency,omitempty"`
    PayGrade *string `json:"payGrade,omitempty"`
    PayType *string `json:"payType,omitempty"`
    RatePer *string `json:"ratePer,omitempty"`
    Salary *float64 `json:"salary,omitempty"`
    
}

type StagedEmployeePrimaryStateTax struct {
    Amount *float64 `json:"amount,omitempty"`
    DeductionsAmount *float64 `json:"deductionsAmount,omitempty"`
    DependentsAmount *float64 `json:"dependentsAmount,omitempty"`
    Exemptions *float64 `json:"exemptions,omitempty"`
    Exemptions2 *float64 `json:"exemptions2,omitempty"`
    FilingStatus *string `json:"filingStatus,omitempty"`
    HigherRate *bool `json:"higherRate,omitempty"`
    OtherIncomeAmount *float64 `json:"otherIncomeAmount,omitempty"`
    Percentage *float64 `json:"percentage,omitempty"`
    SpecialCheckCalc *string `json:"specialCheckCalc,omitempty"`
    TaxCalculationCode *string `json:"taxCalculationCode,omitempty"`
    TaxCode *string `json:"taxCode,omitempty"`
    W4FormYear *int64 `json:"w4FormYear,omitempty"`
    
}

type StagedEmployeeStatus struct {
    AdjustedSeniorityDate *string `json:"adjustedSeniorityDate,omitempty"`
    ChangeReason *string `json:"changeReason,omitempty"`
    EffectiveDate *string `json:"effectiveDate,omitempty"`
    EmployeeStatus *string `json:"employeeStatus,omitempty"`
    HireDate *string `json:"hireDate,omitempty"`
    IsEligibleForRehire *bool `json:"isEligibleForRehire,omitempty"`
    
}

type StagedEmployeeWebTime struct {
    BadgeNumber *string `json:"badgeNumber,omitempty"`
    ChargeRate *float64 `json:"chargeRate,omitempty"`
    IsTimeLaborEnabled *bool `json:"isTimeLaborEnabled,omitempty"`
    
}

type StagedEmployeeWorkAddress struct {
    Address1 *string `json:"address1,omitempty"`
    Address2 *string `json:"address2,omitempty"`
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    County *string `json:"county,omitempty"`
    EmailAddress *string `json:"emailAddress,omitempty"`
    MobilePhone *string `json:"mobilePhone,omitempty"`
    Pager *string `json:"pager,omitempty"`
    Phone *string `json:"phone,omitempty"`
    PhoneExtension *string `json:"phoneExtension,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    State *string `json:"state,omitempty"`
    
}

type StagedEmployeeWorkEligibility struct {
    AlienOrAdmissionDocumentNumber *string `json:"alienOrAdmissionDocumentNumber,omitempty"`
    AttestedDate *string `json:"attestedDate,omitempty"`
    CountryOfIssuance *string `json:"countryOfIssuance,omitempty"`
    ForeignPassportNumber *string `json:"foreignPassportNumber,omitempty"`
    I94AdmissionNumber *string `json:"i94AdmissionNumber,omitempty"`
    I9DateVerified *string `json:"i9DateVerified,omitempty"`
    I9Notes *string `json:"i9Notes,omitempty"`
    IsI9Verified *bool `json:"isI9Verified,omitempty"`
    IsSsnVerified *bool `json:"isSsnVerified,omitempty"`
    SsnDateVerified *string `json:"ssnDateVerified,omitempty"`
    SsnNotes *string `json:"ssnNotes,omitempty"`
    VisaType *string `json:"visaType,omitempty"`
    WorkAuthorization *string `json:"workAuthorization,omitempty"`
    WorkUntil *string `json:"workUntil,omitempty"`
    
}

type StagedEmployee struct {
    AdditionalDirectDeposit []StagedEmployeeAdditionalDirectDeposit `json:"additionalDirectDeposit,omitempty"`
    BenefitSetup []StagedEmployeeBenefitSetup `json:"benefitSetup,omitempty"`
    BirthDate *string `json:"birthDate,omitempty"`
    CustomBooleanFields []StagedEmployeeCustomBooleanFields `json:"customBooleanFields,omitempty"`
    CustomDateFields []StagedEmployeeCustomDateFields `json:"customDateFields,omitempty"`
    CustomDropDownFields []StagedEmployeeCustomDropDownFields `json:"customDropDownFields,omitempty"`
    CustomNumberFields []StagedEmployeeCustomNumberFields `json:"customNumberFields,omitempty"`
    CustomTextFields []StagedEmployeeCustomTextFields `json:"customTextFields,omitempty"`
    DepartmentPosition []StagedEmployeeDepartmentPosition `json:"departmentPosition,omitempty"`
    DisabilityDescription *string `json:"disabilityDescription,omitempty"`
    EmployeeID *string `json:"employeeId,omitempty"`
    Ethnicity *string `json:"ethnicity,omitempty"`
    FederalTax []StagedEmployeeFederalTax `json:"federalTax,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    FitwExemptReason *string `json:"fitwExemptReason,omitempty"`
    FutaExemptReason *string `json:"futaExemptReason,omitempty"`
    Gender *string `json:"gender,omitempty"`
    HomeAddress []StagedEmployeeHomeAddress `json:"homeAddress,omitempty"`
    IsEmployee943 *bool `json:"isEmployee943,omitempty"`
    IsSmoker *bool `json:"isSmoker,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    LocalTax []StagedEmployeeLocalTax `json:"localTax,omitempty"`
    MainDirectDeposit []StagedEmployeeMainDirectDeposit `json:"mainDirectDeposit,omitempty"`
    MaritalStatus *string `json:"maritalStatus,omitempty"`
    MedExemptReason *string `json:"medExemptReason,omitempty"`
    MiddleName *string `json:"middleName,omitempty"`
    NonPrimaryStateTax []StagedEmployeeNonPrimaryStateTax `json:"nonPrimaryStateTax,omitempty"`
    PreferredName *string `json:"preferredName,omitempty"`
    PrimaryPayRate []StagedEmployeePrimaryPayRate `json:"primaryPayRate,omitempty"`
    PrimaryStateTax []StagedEmployeePrimaryStateTax `json:"primaryStateTax,omitempty"`
    PriorLastName *string `json:"priorLastName,omitempty"`
    Salutation *string `json:"salutation,omitempty"`
    SitwExemptReason *string `json:"sitwExemptReason,omitempty"`
    SsExemptReason *string `json:"ssExemptReason,omitempty"`
    Ssn *string `json:"ssn,omitempty"`
    Status []StagedEmployeeStatus `json:"status,omitempty"`
    Suffix *string `json:"suffix,omitempty"`
    SuiExemptReason *string `json:"suiExemptReason,omitempty"`
    SuiState *string `json:"suiState,omitempty"`
    TaxDistributionCode1099R *string `json:"taxDistributionCode1099R,omitempty"`
    TaxForm *string `json:"taxForm,omitempty"`
    VeteranDescription *string `json:"veteranDescription,omitempty"`
    WebTime *StagedEmployeeWebTime `json:"webTime,omitempty"`
    WorkAddress []StagedEmployeeWorkAddress `json:"workAddress,omitempty"`
    WorkEligibility []StagedEmployeeWorkEligibility `json:"workEligibility,omitempty"`
    
}

