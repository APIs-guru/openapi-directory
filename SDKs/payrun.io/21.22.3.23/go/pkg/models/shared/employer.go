package shared

import (
"time")

type EmployerEmployerAddress struct {
    Address1 *string `json:"Address1,omitempty"`
    Address2 *string `json:"Address2,omitempty"`
    Address3 *string `json:"Address3,omitempty"`
    Address4 *string `json:"Address4,omitempty"`
    Country *string `json:"Country,omitempty"`
    Postcode *string `json:"Postcode,omitempty"`
    
}

type EmployerEmployerAutoEnrolmentPension struct {
    AtHref *string `json:"@href,omitempty"`
    AtRel *string `json:"@rel,omitempty"`
    AtTitle *string `json:"@title,omitempty"`
    
}

type EmployerEmployerAutoEnrolment struct {
    Pension *EmployerEmployerAutoEnrolmentPension `json:"Pension,omitempty"`
    PostponementDate *time.Time `json:"PostponementDate,omitempty"`
    PrimaryEmail *string `json:"PrimaryEmail,omitempty"`
    PrimaryFirstName *string `json:"PrimaryFirstName,omitempty"`
    PrimaryJobTitle *string `json:"PrimaryJobTitle,omitempty"`
    PrimaryLastName *string `json:"PrimaryLastName,omitempty"`
    PrimaryTelephone *string `json:"PrimaryTelephone,omitempty"`
    ReEnrolmentDayOffset *int32 `json:"ReEnrolmentDayOffset,omitempty"`
    ReEnrolmentMonthOffset *int32 `json:"ReEnrolmentMonthOffset,omitempty"`
    SecondaryEmail *string `json:"SecondaryEmail,omitempty"`
    SecondaryFirstName *string `json:"SecondaryFirstName,omitempty"`
    SecondaryJobTitle *string `json:"SecondaryJobTitle,omitempty"`
    SecondaryLastName *string `json:"SecondaryLastName,omitempty"`
    SecondaryTelephone *string `json:"SecondaryTelephone,omitempty"`
    StagingDate *time.Time `json:"StagingDate,omitempty"`
    
}

type EmployerEmployerBankAccount struct {
    AccountName *string `json:"AccountName,omitempty"`
    AccountNumber *string `json:"AccountNumber,omitempty"`
    Reference *string `json:"Reference,omitempty"`
    SortCode *string `json:"SortCode,omitempty"`
    
}


type EmployerEmployerHmrcSettingsSenderEnum string

const (
    EmployerEmployerHmrcSettingsSenderEnumEmployer EmployerEmployerHmrcSettingsSenderEnum = "Employer"
EmployerEmployerHmrcSettingsSenderEnumIndividual EmployerEmployerHmrcSettingsSenderEnum = "Individual"
EmployerEmployerHmrcSettingsSenderEnumCompany EmployerEmployerHmrcSettingsSenderEnum = "Company"
EmployerEmployerHmrcSettingsSenderEnumAgent EmployerEmployerHmrcSettingsSenderEnum = "Agent"
EmployerEmployerHmrcSettingsSenderEnumBureau EmployerEmployerHmrcSettingsSenderEnum = "Bureau"
EmployerEmployerHmrcSettingsSenderEnumPartnership EmployerEmployerHmrcSettingsSenderEnum = "Partnership"
EmployerEmployerHmrcSettingsSenderEnumTrust EmployerEmployerHmrcSettingsSenderEnum = "Trust"
EmployerEmployerHmrcSettingsSenderEnumGovernment EmployerEmployerHmrcSettingsSenderEnum = "Government"
EmployerEmployerHmrcSettingsSenderEnumActingInCapacity EmployerEmployerHmrcSettingsSenderEnum = "ActingInCapacity"
EmployerEmployerHmrcSettingsSenderEnumOther EmployerEmployerHmrcSettingsSenderEnum = "Other"
)



type EmployerEmployerHmrcSettingsStateAidSectorEnum string

const (
    EmployerEmployerHmrcSettingsStateAidSectorEnumAgriculture EmployerEmployerHmrcSettingsStateAidSectorEnum = "Agriculture"
EmployerEmployerHmrcSettingsStateAidSectorEnumFisheriesAquaculture EmployerEmployerHmrcSettingsStateAidSectorEnum = "FisheriesAquaculture"
EmployerEmployerHmrcSettingsStateAidSectorEnumRoadTransport EmployerEmployerHmrcSettingsStateAidSectorEnum = "RoadTransport"
EmployerEmployerHmrcSettingsStateAidSectorEnumIndustrial EmployerEmployerHmrcSettingsStateAidSectorEnum = "Industrial"
EmployerEmployerHmrcSettingsStateAidSectorEnumNotApplicable EmployerEmployerHmrcSettingsStateAidSectorEnum = "NotApplicable"
)


type EmployerEmployerHmrcSettings struct {
    AccountingOfficeRef *string `json:"AccountingOfficeRef,omitempty"`
    CotaxRef *string `json:"COTAXRef,omitempty"`
    ContactEmail *string `json:"ContactEmail,omitempty"`
    ContactFax *string `json:"ContactFax,omitempty"`
    ContactFirstName *string `json:"ContactFirstName,omitempty"`
    ContactLastName *string `json:"ContactLastName,omitempty"`
    ContactTelephone *string `json:"ContactTelephone,omitempty"`
    EmploymentAllowanceOverride *float64 `json:"EmploymentAllowanceOverride,omitempty"`
    Password *string `json:"Password,omitempty"`
    Sautr *string `json:"SAUTR,omitempty"`
    Sender *EmployerEmployerHmrcSettingsSenderEnum `json:"Sender,omitempty"`
    SenderID *string `json:"SenderId,omitempty"`
    StateAidSector *EmployerEmployerHmrcSettingsStateAidSectorEnum `json:"StateAidSector,omitempty"`
    TaxOfficeNumber *string `json:"TaxOfficeNumber,omitempty"`
    TaxOfficeReference *string `json:"TaxOfficeReference,omitempty"`
    
}


type EmployerEmployerRegionEnum string

const (
    EmployerEmployerRegionEnumNotSet EmployerEmployerRegionEnum = "NotSet"
EmployerEmployerRegionEnumEngland EmployerEmployerRegionEnum = "England"
EmployerEmployerRegionEnumScotland EmployerEmployerRegionEnum = "Scotland"
EmployerEmployerRegionEnumWales EmployerEmployerRegionEnum = "Wales"
)



type EmployerEmployerRuleExclusionsEnum string

const (
    EmployerEmployerRuleExclusionsEnumNone EmployerEmployerRuleExclusionsEnum = "None"
EmployerEmployerRuleExclusionsEnumNiMissingPayInstructionRule EmployerEmployerRuleExclusionsEnum = "NiMissingPayInstructionRule"
EmployerEmployerRuleExclusionsEnumTaxMissingPayInstructionRule EmployerEmployerRuleExclusionsEnum = "TaxMissingPayInstructionRule"
EmployerEmployerRuleExclusionsEnumTaxCodeUpliftRule EmployerEmployerRuleExclusionsEnum = "TaxCodeUpliftRule"
EmployerEmployerRuleExclusionsEnumNiSetExpectedLetterRule EmployerEmployerRuleExclusionsEnum = "NiSetExpectedLetterRule"
EmployerEmployerRuleExclusionsEnumNiDateOfBirthChangeRetrospectiveCRule EmployerEmployerRuleExclusionsEnum = "NiDateOfBirthChangeRetrospectiveCRule"
EmployerEmployerRuleExclusionsEnumNiDefermentStatusChangeRule EmployerEmployerRuleExclusionsEnum = "NiDefermentStatusChangeRule"
EmployerEmployerRuleExclusionsEnumNiEndContractedOutTransferRule EmployerEmployerRuleExclusionsEnum = "NiEndContractedOutTransferRule"
EmployerEmployerRuleExclusionsEnumPaymentAfterLeavingRule EmployerEmployerRuleExclusionsEnum = "PaymentAfterLeavingRule"
EmployerEmployerRuleExclusionsEnumLeaverEndInstructionsRule EmployerEmployerRuleExclusionsEnum = "LeaverEndInstructionsRule"
EmployerEmployerRuleExclusionsEnumP45StudentLoanInstructionRule EmployerEmployerRuleExclusionsEnum = "P45StudentLoanInstructionRule"
EmployerEmployerRuleExclusionsEnumP45TaxInstructionRule EmployerEmployerRuleExclusionsEnum = "P45TaxInstructionRule"
EmployerEmployerRuleExclusionsEnumP45YtdTaxRule EmployerEmployerRuleExclusionsEnum = "P45YtdTaxRule"
EmployerEmployerRuleExclusionsEnumYtdInstructionRule EmployerEmployerRuleExclusionsEnum = "YtdInstructionRule"
EmployerEmployerRuleExclusionsEnumTaxCodeRegionChangeRule EmployerEmployerRuleExclusionsEnum = "TaxCodeRegionChangeRule"
EmployerEmployerRuleExclusionsEnumAutoEnrolmentStatusChangeRule EmployerEmployerRuleExclusionsEnum = "AutoEnrolmentStatusChangeRule"
EmployerEmployerRuleExclusionsEnumEmployeeDeceasedRule EmployerEmployerRuleExclusionsEnum = "EmployeeDeceasedRule"
EmployerEmployerRuleExclusionsEnumBenefitInstructionAutoEndRule EmployerEmployerRuleExclusionsEnum = "BenefitInstructionAutoEndRule"
)



type EmployerEmployerTerritoryEnum string

const (
    EmployerEmployerTerritoryEnumUnitedKingdom EmployerEmployerTerritoryEnum = "UnitedKingdom"
)


type EmployerEmployer struct {
    Address *EmployerEmployerAddress `json:"Address,omitempty"`
    ApprenticeshipLevyAllowance *float64 `json:"ApprenticeshipLevyAllowance,omitempty"`
    AutoEnrolment *EmployerEmployerAutoEnrolment `json:"AutoEnrolment,omitempty"`
    BacsServiceUserNumber *string `json:"BacsServiceUserNumber,omitempty"`
    BankAccount *EmployerEmployerBankAccount `json:"BankAccount,omitempty"`
    CalculateApprenticeshipLevy *bool `json:"CalculateApprenticeshipLevy,omitempty"`
    ClaimEmploymentAllowance *bool `json:"ClaimEmploymentAllowance,omitempty"`
    ClaimSmallEmployerRelief *bool `json:"ClaimSmallEmployerRelief,omitempty"`
    EffectiveDate *time.Time `json:"EffectiveDate,omitempty"`
    HmrcSettings *EmployerEmployerHmrcSettings `json:"HmrcSettings,omitempty"`
    MetaData map[string]interface{} `json:"MetaData,omitempty"`
    Name *string `json:"Name,omitempty"`
    Region *EmployerEmployerRegionEnum `json:"Region,omitempty"`
    Revision *int32 `json:"Revision,omitempty"`
    RuleExclusions *EmployerEmployerRuleExclusionsEnum `json:"RuleExclusions,omitempty"`
    Territory *EmployerEmployerTerritoryEnum `json:"Territory,omitempty"`
    
}

type Employer struct {
    Employer *EmployerEmployer `json:"Employer,omitempty"`
    
}

