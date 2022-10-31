package shared



type EmployeeAdditionalDirectDeposit struct {
    AccountNumber *string `json:"accountNumber,omitempty"`
    AccountType *string `json:"accountType,omitempty"`
    Amount *float64 `json:"amount,omitempty"`
    AmountType *string `json:"amountType,omitempty"`
    BlockSpecial *bool `json:"blockSpecial,omitempty"`
    IsSkipPreNote *bool `json:"isSkipPreNote,omitempty"`
    NameOnAccount *string `json:"nameOnAccount,omitempty"`
    PreNoteDate *string `json:"preNoteDate,omitempty"`
    RoutingNumber *string `json:"routingNumber,omitempty"`
    
}

type EmployeeAdditionalRate struct {
    ChangeReason *string `json:"changeReason,omitempty"`
    CostCenter1 *string `json:"costCenter1,omitempty"`
    CostCenter2 *string `json:"costCenter2,omitempty"`
    CostCenter3 *string `json:"costCenter3,omitempty"`
    EffectiveDate *string `json:"effectiveDate,omitempty"`
    EndCheckDate *string `json:"endCheckDate,omitempty"`
    Job *string `json:"job,omitempty"`
    Rate *float64 `json:"rate,omitempty"`
    RateCode *string `json:"rateCode,omitempty"`
    RateNotes *string `json:"rateNotes,omitempty"`
    RatePer *string `json:"ratePer,omitempty"`
    Shift *string `json:"shift,omitempty"`
    
}

type EmployeeBenefitSetup struct {
    BenefitClass *string `json:"benefitClass,omitempty"`
    BenefitClassEffectiveDate *string `json:"benefitClassEffectiveDate,omitempty"`
    BenefitSalary *float64 `json:"benefitSalary,omitempty"`
    BenefitSalaryEffectiveDate *string `json:"benefitSalaryEffectiveDate,omitempty"`
    DoNotApplyAdministrativePeriod *bool `json:"doNotApplyAdministrativePeriod,omitempty"`
    IsMeasureAcaEligibility *bool `json:"isMeasureAcaEligibility,omitempty"`
    
}


type EmployeeCustomBooleanFieldsCategoryEnum string

const (
    EmployeeCustomBooleanFieldsCategoryEnumPayrollAndHr EmployeeCustomBooleanFieldsCategoryEnum = "PayrollAndHR"
)


type EmployeeCustomBooleanFields struct {
    Category EmployeeCustomBooleanFieldsCategoryEnum `json:"category"`
    Label string `json:"label"`
    Value bool `json:"value"`
    
}


type EmployeeCustomDateFieldsCategoryEnum string

const (
    EmployeeCustomDateFieldsCategoryEnumPayrollAndHr EmployeeCustomDateFieldsCategoryEnum = "PayrollAndHR"
)


type EmployeeCustomDateFields struct {
    Category EmployeeCustomDateFieldsCategoryEnum `json:"category"`
    Label string `json:"label"`
    Value string `json:"value"`
    
}


type EmployeeCustomDropDownFieldsCategoryEnum string

const (
    EmployeeCustomDropDownFieldsCategoryEnumPayrollAndHr EmployeeCustomDropDownFieldsCategoryEnum = "PayrollAndHR"
)


type EmployeeCustomDropDownFields struct {
    Category EmployeeCustomDropDownFieldsCategoryEnum `json:"category"`
    Label string `json:"label"`
    Value string `json:"value"`
    
}


type EmployeeCustomNumberFieldsCategoryEnum string

const (
    EmployeeCustomNumberFieldsCategoryEnumPayrollAndHr EmployeeCustomNumberFieldsCategoryEnum = "PayrollAndHR"
)


type EmployeeCustomNumberFields struct {
    Category EmployeeCustomNumberFieldsCategoryEnum `json:"category"`
    Label string `json:"label"`
    Value float64 `json:"value"`
    
}


type EmployeeCustomTextFieldsCategoryEnum string

const (
    EmployeeCustomTextFieldsCategoryEnumPayrollAndHr EmployeeCustomTextFieldsCategoryEnum = "PayrollAndHR"
)


type EmployeeCustomTextFields struct {
    Category EmployeeCustomTextFieldsCategoryEnum `json:"category"`
    Label string `json:"label"`
    Value string `json:"value"`
    
}

type EmployeeDepartmentPosition struct {
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
    ReviewerCompanyNumber *string `json:"reviewerCompanyNumber,omitempty"`
    ReviewerEmployeeID *string `json:"reviewerEmployeeId,omitempty"`
    Shift *string `json:"shift,omitempty"`
    SupervisorCompanyNumber *string `json:"supervisorCompanyNumber,omitempty"`
    SupervisorEmployeeID *string `json:"supervisorEmployeeId,omitempty"`
    Tipped *string `json:"tipped,omitempty"`
    UnionAffiliationDate *string `json:"unionAffiliationDate,omitempty"`
    UnionCode *string `json:"unionCode,omitempty"`
    UnionPosition *string `json:"unionPosition,omitempty"`
    WorkersCompensation *string `json:"workersCompensation,omitempty"`
    
}

type EmployeeEmergencyContacts struct {
    Address1 *string `json:"address1,omitempty"`
    Address2 *string `json:"address2,omitempty"`
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    County *string `json:"county,omitempty"`
    Email *string `json:"email,omitempty"`
    FirstName string `json:"firstName"`
    HomePhone *string `json:"homePhone,omitempty"`
    LastName string `json:"lastName"`
    MobilePhone *string `json:"mobilePhone,omitempty"`
    Notes *string `json:"notes,omitempty"`
    Pager *string `json:"pager,omitempty"`
    PrimaryPhone *string `json:"primaryPhone,omitempty"`
    Priority *string `json:"priority,omitempty"`
    Relationship *string `json:"relationship,omitempty"`
    State *string `json:"state,omitempty"`
    SyncEmployeeInfo *bool `json:"syncEmployeeInfo,omitempty"`
    WorkExtension *string `json:"workExtension,omitempty"`
    WorkPhone *string `json:"workPhone,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

type EmployeeFederalTax struct {
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

type EmployeeHomeAddress struct {
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

type EmployeeLocalTax struct {
    Exemptions *float64 `json:"exemptions,omitempty"`
    Exemptions2 *float64 `json:"exemptions2,omitempty"`
    FilingStatus *string `json:"filingStatus,omitempty"`
    ResidentPsd *string `json:"residentPSD,omitempty"`
    TaxCode *string `json:"taxCode,omitempty"`
    WorkPsd *string `json:"workPSD,omitempty"`
    
}

type EmployeeMainDirectDeposit struct {
    AccountNumber *string `json:"accountNumber,omitempty"`
    AccountType *string `json:"accountType,omitempty"`
    BlockSpecial *bool `json:"blockSpecial,omitempty"`
    IsSkipPreNote *bool `json:"isSkipPreNote,omitempty"`
    NameOnAccount *string `json:"nameOnAccount,omitempty"`
    PreNoteDate *string `json:"preNoteDate,omitempty"`
    RoutingNumber *string `json:"routingNumber,omitempty"`
    
}

type EmployeeNonPrimaryStateTax struct {
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

type EmployeePrimaryPayRate struct {
    AnnualSalary *float64 `json:"annualSalary,omitempty"`
    BaseRate *float64 `json:"baseRate,omitempty"`
    BeginCheckDate *string `json:"beginCheckDate,omitempty"`
    ChangeReason *string `json:"changeReason,omitempty"`
    DefaultHours *float64 `json:"defaultHours,omitempty"`
    EffectiveDate *string `json:"effectiveDate,omitempty"`
    IsAutoPay *bool `json:"isAutoPay,omitempty"`
    PayFrequency *string `json:"payFrequency,omitempty"`
    PayGrade *string `json:"payGrade,omitempty"`
    PayRateNote *string `json:"payRateNote,omitempty"`
    PayType *string `json:"payType,omitempty"`
    RatePer *string `json:"ratePer,omitempty"`
    Salary *float64 `json:"salary,omitempty"`
    
}

type EmployeePrimaryStateTax struct {
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

type EmployeeStatus struct {
    AdjustedSeniorityDate *string `json:"adjustedSeniorityDate,omitempty"`
    ChangeReason *string `json:"changeReason,omitempty"`
    EffectiveDate *string `json:"effectiveDate,omitempty"`
    EmployeeStatus *string `json:"employeeStatus,omitempty"`
    HireDate *string `json:"hireDate,omitempty"`
    IsEligibleForRehire *bool `json:"isEligibleForRehire,omitempty"`
    ReHireDate *string `json:"reHireDate,omitempty"`
    
}

type EmployeeTaxSetup struct {
    FitwExemptNotes *string `json:"fitwExemptNotes,omitempty"`
    FitwExemptReason *string `json:"fitwExemptReason,omitempty"`
    FutaExemptNotes *string `json:"futaExemptNotes,omitempty"`
    FutaExemptReason *string `json:"futaExemptReason,omitempty"`
    IsEmployee943 *bool `json:"isEmployee943,omitempty"`
    IsPension *bool `json:"isPension,omitempty"`
    IsStatutory *bool `json:"isStatutory,omitempty"`
    MedExemptNotes *string `json:"medExemptNotes,omitempty"`
    MedExemptReason *string `json:"medExemptReason,omitempty"`
    SitwExemptNotes *string `json:"sitwExemptNotes,omitempty"`
    SitwExemptReason *string `json:"sitwExemptReason,omitempty"`
    SsExemptNotes *string `json:"ssExemptNotes,omitempty"`
    SsExemptReason *string `json:"ssExemptReason,omitempty"`
    SuiExemptNotes *string `json:"suiExemptNotes,omitempty"`
    SuiExemptReason *string `json:"suiExemptReason,omitempty"`
    SuiState *string `json:"suiState,omitempty"`
    TaxDistributionCode1099R *string `json:"taxDistributionCode1099R,omitempty"`
    TaxForm *string `json:"taxForm,omitempty"`
    
}

type EmployeeWebTime struct {
    BadgeNumber *string `json:"badgeNumber,omitempty"`
    ChargeRate *float64 `json:"chargeRate,omitempty"`
    IsTimeLaborEnabled *bool `json:"isTimeLaborEnabled,omitempty"`
    
}

type EmployeeWorkAddress struct {
    Address1 *string `json:"address1,omitempty"`
    Address2 *string `json:"address2,omitempty"`
    City *string `json:"city,omitempty"`
    Country *string `json:"country,omitempty"`
    County *string `json:"county,omitempty"`
    EmailAddress *string `json:"emailAddress,omitempty"`
    Location *string `json:"location,omitempty"`
    MailStop *string `json:"mailStop,omitempty"`
    MobilePhone *string `json:"mobilePhone,omitempty"`
    Pager *string `json:"pager,omitempty"`
    Phone *string `json:"phone,omitempty"`
    PhoneExtension *string `json:"phoneExtension,omitempty"`
    PostalCode *string `json:"postalCode,omitempty"`
    State *string `json:"state,omitempty"`
    
}

type EmployeeWorkEligibility struct {
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

type Employee struct {
    AdditionalDirectDeposit []EmployeeAdditionalDirectDeposit `json:"additionalDirectDeposit,omitempty"`
    AdditionalRate []EmployeeAdditionalRate `json:"additionalRate,omitempty"`
    BenefitSetup *EmployeeBenefitSetup `json:"benefitSetup,omitempty"`
    BirthDate *string `json:"birthDate,omitempty"`
    CompanyFein *string `json:"companyFEIN,omitempty"`
    CompanyName *string `json:"companyName,omitempty"`
    Currency *string `json:"currency,omitempty"`
    CustomBooleanFields []EmployeeCustomBooleanFields `json:"customBooleanFields,omitempty"`
    CustomDateFields []EmployeeCustomDateFields `json:"customDateFields,omitempty"`
    CustomDropDownFields []EmployeeCustomDropDownFields `json:"customDropDownFields,omitempty"`
    CustomNumberFields []EmployeeCustomNumberFields `json:"customNumberFields,omitempty"`
    CustomTextFields []EmployeeCustomTextFields `json:"customTextFields,omitempty"`
    DepartmentPosition *EmployeeDepartmentPosition `json:"departmentPosition,omitempty"`
    DisabilityDescription *string `json:"disabilityDescription,omitempty"`
    EmergencyContacts []EmployeeEmergencyContacts `json:"emergencyContacts,omitempty"`
    EmployeeID *string `json:"employeeId,omitempty"`
    Ethnicity *string `json:"ethnicity,omitempty"`
    FederalTax *EmployeeFederalTax `json:"federalTax,omitempty"`
    FirstName *string `json:"firstName,omitempty"`
    Gender *string `json:"gender,omitempty"`
    HomeAddress *EmployeeHomeAddress `json:"homeAddress,omitempty"`
    IsHighlyCompensated *bool `json:"isHighlyCompensated,omitempty"`
    IsSmoker *bool `json:"isSmoker,omitempty"`
    LastName *string `json:"lastName,omitempty"`
    LocalTax []EmployeeLocalTax `json:"localTax,omitempty"`
    MainDirectDeposit *EmployeeMainDirectDeposit `json:"mainDirectDeposit,omitempty"`
    MaritalStatus *string `json:"maritalStatus,omitempty"`
    MiddleName *string `json:"middleName,omitempty"`
    NonPrimaryStateTax *EmployeeNonPrimaryStateTax `json:"nonPrimaryStateTax,omitempty"`
    OwnerPercent *float64 `json:"ownerPercent,omitempty"`
    PreferredName *string `json:"preferredName,omitempty"`
    PrimaryPayRate *EmployeePrimaryPayRate `json:"primaryPayRate,omitempty"`
    PrimaryStateTax *EmployeePrimaryStateTax `json:"primaryStateTax,omitempty"`
    PriorLastName *string `json:"priorLastName,omitempty"`
    Salutation *string `json:"salutation,omitempty"`
    Ssn *string `json:"ssn,omitempty"`
    Status *EmployeeStatus `json:"status,omitempty"`
    Suffix *string `json:"suffix,omitempty"`
    TaxSetup *EmployeeTaxSetup `json:"taxSetup,omitempty"`
    VeteranDescription *string `json:"veteranDescription,omitempty"`
    WebTime *EmployeeWebTime `json:"webTime,omitempty"`
    WorkAddress *EmployeeWorkAddress `json:"workAddress,omitempty"`
    WorkEligibility *EmployeeWorkEligibility `json:"workEligibility,omitempty"`
    
}

