package shared

import (
	"time"
)

type EmployerEmployerAddressAddress struct {
	Address1 *string `json:"Address1"`
	Address2 *string `json:"Address2"`
	Address3 *string `json:"Address3"`
	Address4 *string `json:"Address4"`
	Country  *string `json:"Country"`
	Postcode *string `json:"Postcode"`
}

type EmployerEmployerAutoEnrolmentPensionPension struct {
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
}

type EmployerEmployerAutoEnrolmentAutoEnrolment struct {
	Pension                *EmployerEmployerAutoEnrolmentPensionPension `json:"Pension"`
	PostponementDate       *time.Time                                   `json:"PostponementDate"`
	PrimaryEmail           *string                                      `json:"PrimaryEmail"`
	PrimaryFirstName       *string                                      `json:"PrimaryFirstName"`
	PrimaryJobTitle        *string                                      `json:"PrimaryJobTitle"`
	PrimaryLastName        *string                                      `json:"PrimaryLastName"`
	PrimaryTelephone       *string                                      `json:"PrimaryTelephone"`
	ReEnrolmentDayOffset   *int32                                       `json:"ReEnrolmentDayOffset"`
	ReEnrolmentMonthOffset *int32                                       `json:"ReEnrolmentMonthOffset"`
	SecondaryEmail         *string                                      `json:"SecondaryEmail"`
	SecondaryFirstName     *string                                      `json:"SecondaryFirstName"`
	SecondaryJobTitle      *string                                      `json:"SecondaryJobTitle"`
	SecondaryLastName      *string                                      `json:"SecondaryLastName"`
	SecondaryTelephone     *string                                      `json:"SecondaryTelephone"`
	StagingDate            *time.Time                                   `json:"StagingDate"`
}

type EmployerEmployerBankAccountBankAccount struct {
	AccountName   *string `json:"AccountName"`
	AccountNumber *string `json:"AccountNumber"`
	Reference     *string `json:"Reference"`
	SortCode      *string `json:"SortCode"`
}

type EmployerEmployerHmrcSettingsSenderSenderEnum string

const (
	EmployerEmployerHmrcSettingsSenderSenderEnumEmployer         EmployerEmployerHmrcSettingsSenderSenderEnum = "Employer"
	EmployerEmployerHmrcSettingsSenderSenderEnumIndividual       EmployerEmployerHmrcSettingsSenderSenderEnum = "Individual"
	EmployerEmployerHmrcSettingsSenderSenderEnumCompany          EmployerEmployerHmrcSettingsSenderSenderEnum = "Company"
	EmployerEmployerHmrcSettingsSenderSenderEnumAgent            EmployerEmployerHmrcSettingsSenderSenderEnum = "Agent"
	EmployerEmployerHmrcSettingsSenderSenderEnumBureau           EmployerEmployerHmrcSettingsSenderSenderEnum = "Bureau"
	EmployerEmployerHmrcSettingsSenderSenderEnumPartnership      EmployerEmployerHmrcSettingsSenderSenderEnum = "Partnership"
	EmployerEmployerHmrcSettingsSenderSenderEnumTrust            EmployerEmployerHmrcSettingsSenderSenderEnum = "Trust"
	EmployerEmployerHmrcSettingsSenderSenderEnumGovernment       EmployerEmployerHmrcSettingsSenderSenderEnum = "Government"
	EmployerEmployerHmrcSettingsSenderSenderEnumActingInCapacity EmployerEmployerHmrcSettingsSenderSenderEnum = "ActingInCapacity"
	EmployerEmployerHmrcSettingsSenderSenderEnumOther            EmployerEmployerHmrcSettingsSenderSenderEnum = "Other"
)

type EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnum string

const (
	EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnumAgriculture          EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnum = "Agriculture"
	EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnumFisheriesAquaculture EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnum = "FisheriesAquaculture"
	EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnumRoadTransport        EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnum = "RoadTransport"
	EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnumIndustrial           EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnum = "Industrial"
	EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnumNotApplicable        EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnum = "NotApplicable"
)

type EmployerEmployerHmrcSettingsHmrcSettings struct {
	AccountingOfficeRef         *string                                                       `json:"AccountingOfficeRef"`
	CotaxRef                    *string                                                       `json:"COTAXRef"`
	ContactEmail                *string                                                       `json:"ContactEmail"`
	ContactFax                  *string                                                       `json:"ContactFax"`
	ContactFirstName            *string                                                       `json:"ContactFirstName"`
	ContactLastName             *string                                                       `json:"ContactLastName"`
	ContactTelephone            *string                                                       `json:"ContactTelephone"`
	EmploymentAllowanceOverride *float64                                                      `json:"EmploymentAllowanceOverride"`
	Password                    *string                                                       `json:"Password"`
	Sautr                       *string                                                       `json:"SAUTR"`
	Sender                      *EmployerEmployerHmrcSettingsSenderSenderEnum                 `json:"Sender"`
	SenderID                    *string                                                       `json:"SenderId"`
	StateAidSector              *EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnum `json:"StateAidSector"`
	TaxOfficeNumber             *string                                                       `json:"TaxOfficeNumber"`
	TaxOfficeReference          *string                                                       `json:"TaxOfficeReference"`
}

type EmployerEmployerRegionRegionEnum string

const (
	EmployerEmployerRegionRegionEnumNotSet   EmployerEmployerRegionRegionEnum = "NotSet"
	EmployerEmployerRegionRegionEnumEngland  EmployerEmployerRegionRegionEnum = "England"
	EmployerEmployerRegionRegionEnumScotland EmployerEmployerRegionRegionEnum = "Scotland"
	EmployerEmployerRegionRegionEnumWales    EmployerEmployerRegionRegionEnum = "Wales"
)

type EmployerEmployerRuleExclusionsRuleExclusionsEnum string

const (
	EmployerEmployerRuleExclusionsRuleExclusionsEnumNone                                  EmployerEmployerRuleExclusionsRuleExclusionsEnum = "None"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumNiMissingPayInstructionRule           EmployerEmployerRuleExclusionsRuleExclusionsEnum = "NiMissingPayInstructionRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumTaxMissingPayInstructionRule          EmployerEmployerRuleExclusionsRuleExclusionsEnum = "TaxMissingPayInstructionRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumTaxCodeUpliftRule                     EmployerEmployerRuleExclusionsRuleExclusionsEnum = "TaxCodeUpliftRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumNiSetExpectedLetterRule               EmployerEmployerRuleExclusionsRuleExclusionsEnum = "NiSetExpectedLetterRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumNiDateOfBirthChangeRetrospectiveCRule EmployerEmployerRuleExclusionsRuleExclusionsEnum = "NiDateOfBirthChangeRetrospectiveCRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumNiDefermentStatusChangeRule           EmployerEmployerRuleExclusionsRuleExclusionsEnum = "NiDefermentStatusChangeRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumNiEndContractedOutTransferRule        EmployerEmployerRuleExclusionsRuleExclusionsEnum = "NiEndContractedOutTransferRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumPaymentAfterLeavingRule               EmployerEmployerRuleExclusionsRuleExclusionsEnum = "PaymentAfterLeavingRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumLeaverEndInstructionsRule             EmployerEmployerRuleExclusionsRuleExclusionsEnum = "LeaverEndInstructionsRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumP45StudentLoanInstructionRule         EmployerEmployerRuleExclusionsRuleExclusionsEnum = "P45StudentLoanInstructionRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumP45TaxInstructionRule                 EmployerEmployerRuleExclusionsRuleExclusionsEnum = "P45TaxInstructionRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumP45YtdTaxRule                         EmployerEmployerRuleExclusionsRuleExclusionsEnum = "P45YtdTaxRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumYtdInstructionRule                    EmployerEmployerRuleExclusionsRuleExclusionsEnum = "YtdInstructionRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumTaxCodeRegionChangeRule               EmployerEmployerRuleExclusionsRuleExclusionsEnum = "TaxCodeRegionChangeRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumAutoEnrolmentStatusChangeRule         EmployerEmployerRuleExclusionsRuleExclusionsEnum = "AutoEnrolmentStatusChangeRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumEmployeeDeceasedRule                  EmployerEmployerRuleExclusionsRuleExclusionsEnum = "EmployeeDeceasedRule"
	EmployerEmployerRuleExclusionsRuleExclusionsEnumBenefitInstructionAutoEndRule         EmployerEmployerRuleExclusionsRuleExclusionsEnum = "BenefitInstructionAutoEndRule"
)

type EmployerEmployerTerritoryTerritoryEnum string

const (
	EmployerEmployerTerritoryTerritoryEnumUnitedKingdom EmployerEmployerTerritoryTerritoryEnum = "UnitedKingdom"
)

type EmployerEmployerEmployer struct {
	Address                     *EmployerEmployerAddressAddress                   `json:"Address"`
	ApprenticeshipLevyAllowance *float64                                          `json:"ApprenticeshipLevyAllowance"`
	AutoEnrolment               *EmployerEmployerAutoEnrolmentAutoEnrolment       `json:"AutoEnrolment"`
	BacsServiceUserNumber       *string                                           `json:"BacsServiceUserNumber"`
	BankAccount                 *EmployerEmployerBankAccountBankAccount           `json:"BankAccount"`
	CalculateApprenticeshipLevy *bool                                             `json:"CalculateApprenticeshipLevy"`
	ClaimEmploymentAllowance    *bool                                             `json:"ClaimEmploymentAllowance"`
	ClaimSmallEmployerRelief    *bool                                             `json:"ClaimSmallEmployerRelief"`
	EffectiveDate               *time.Time                                        `json:"EffectiveDate"`
	HmrcSettings                *EmployerEmployerHmrcSettingsHmrcSettings         `json:"HmrcSettings"`
	MetaData                    map[string]interface{}                            `json:"MetaData"`
	Name                        *string                                           `json:"Name"`
	Region                      *EmployerEmployerRegionRegionEnum                 `json:"Region"`
	Revision                    *int32                                            `json:"Revision"`
	RuleExclusions              *EmployerEmployerRuleExclusionsRuleExclusionsEnum `json:"RuleExclusions"`
	Territory                   *EmployerEmployerTerritoryTerritoryEnum           `json:"Territory"`
}

type Employer struct {
	Employer *EmployerEmployerEmployer `json:"Employer"`
}
