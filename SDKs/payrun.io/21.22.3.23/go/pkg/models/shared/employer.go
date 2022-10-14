package shared

import (
	"time"
)

type EmployerEmployerAddressAddress struct {
	Address1 *string `json:"Address1,omitempty"`
	Address2 *string `json:"Address2,omitempty"`
	Address3 *string `json:"Address3,omitempty"`
	Address4 *string `json:"Address4,omitempty"`
	Country  *string `json:"Country,omitempty"`
	Postcode *string `json:"Postcode,omitempty"`
}

type EmployerEmployerAutoEnrolmentPensionPension struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type EmployerEmployerAutoEnrolmentAutoEnrolment struct {
	Pension                *EmployerEmployerAutoEnrolmentPensionPension `json:"Pension,omitempty"`
	PostponementDate       *time.Time                                   `json:"PostponementDate,omitempty"`
	PrimaryEmail           *string                                      `json:"PrimaryEmail,omitempty"`
	PrimaryFirstName       *string                                      `json:"PrimaryFirstName,omitempty"`
	PrimaryJobTitle        *string                                      `json:"PrimaryJobTitle,omitempty"`
	PrimaryLastName        *string                                      `json:"PrimaryLastName,omitempty"`
	PrimaryTelephone       *string                                      `json:"PrimaryTelephone,omitempty"`
	ReEnrolmentDayOffset   *int32                                       `json:"ReEnrolmentDayOffset,omitempty"`
	ReEnrolmentMonthOffset *int32                                       `json:"ReEnrolmentMonthOffset,omitempty"`
	SecondaryEmail         *string                                      `json:"SecondaryEmail,omitempty"`
	SecondaryFirstName     *string                                      `json:"SecondaryFirstName,omitempty"`
	SecondaryJobTitle      *string                                      `json:"SecondaryJobTitle,omitempty"`
	SecondaryLastName      *string                                      `json:"SecondaryLastName,omitempty"`
	SecondaryTelephone     *string                                      `json:"SecondaryTelephone,omitempty"`
	StagingDate            *time.Time                                   `json:"StagingDate,omitempty"`
}

type EmployerEmployerBankAccountBankAccount struct {
	AccountName   *string `json:"AccountName,omitempty"`
	AccountNumber *string `json:"AccountNumber,omitempty"`
	Reference     *string `json:"Reference,omitempty"`
	SortCode      *string `json:"SortCode,omitempty"`
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
	AccountingOfficeRef         *string                                                       `json:"AccountingOfficeRef,omitempty"`
	CotaxRef                    *string                                                       `json:"COTAXRef,omitempty"`
	ContactEmail                *string                                                       `json:"ContactEmail,omitempty"`
	ContactFax                  *string                                                       `json:"ContactFax,omitempty"`
	ContactFirstName            *string                                                       `json:"ContactFirstName,omitempty"`
	ContactLastName             *string                                                       `json:"ContactLastName,omitempty"`
	ContactTelephone            *string                                                       `json:"ContactTelephone,omitempty"`
	EmploymentAllowanceOverride *float64                                                      `json:"EmploymentAllowanceOverride,omitempty"`
	Password                    *string                                                       `json:"Password,omitempty"`
	Sautr                       *string                                                       `json:"SAUTR,omitempty"`
	Sender                      *EmployerEmployerHmrcSettingsSenderSenderEnum                 `json:"Sender,omitempty"`
	SenderID                    *string                                                       `json:"SenderId,omitempty"`
	StateAidSector              *EmployerEmployerHmrcSettingsStateAidSectorStateAidSectorEnum `json:"StateAidSector,omitempty"`
	TaxOfficeNumber             *string                                                       `json:"TaxOfficeNumber,omitempty"`
	TaxOfficeReference          *string                                                       `json:"TaxOfficeReference,omitempty"`
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
	Address                     *EmployerEmployerAddressAddress                   `json:"Address,omitempty"`
	ApprenticeshipLevyAllowance *float64                                          `json:"ApprenticeshipLevyAllowance,omitempty"`
	AutoEnrolment               *EmployerEmployerAutoEnrolmentAutoEnrolment       `json:"AutoEnrolment,omitempty"`
	BacsServiceUserNumber       *string                                           `json:"BacsServiceUserNumber,omitempty"`
	BankAccount                 *EmployerEmployerBankAccountBankAccount           `json:"BankAccount,omitempty"`
	CalculateApprenticeshipLevy *bool                                             `json:"CalculateApprenticeshipLevy,omitempty"`
	ClaimEmploymentAllowance    *bool                                             `json:"ClaimEmploymentAllowance,omitempty"`
	ClaimSmallEmployerRelief    *bool                                             `json:"ClaimSmallEmployerRelief,omitempty"`
	EffectiveDate               *time.Time                                        `json:"EffectiveDate,omitempty"`
	HmrcSettings                *EmployerEmployerHmrcSettingsHmrcSettings         `json:"HmrcSettings,omitempty"`
	MetaData                    map[string]interface{}                            `json:"MetaData,omitempty"`
	Name                        *string                                           `json:"Name,omitempty"`
	Region                      *EmployerEmployerRegionRegionEnum                 `json:"Region,omitempty"`
	Revision                    *int32                                            `json:"Revision,omitempty"`
	RuleExclusions              *EmployerEmployerRuleExclusionsRuleExclusionsEnum `json:"RuleExclusions,omitempty"`
	Territory                   *EmployerEmployerTerritoryTerritoryEnum           `json:"Territory,omitempty"`
}

type Employer struct {
	Employer *EmployerEmployerEmployer `json:"Employer,omitempty"`
}
