package shared

import (
	"time"
)

type EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum string

const (
	EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnumNone               EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum = "None"
	EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnumOptOut             EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum = "OptOut"
	EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnumOptIn              EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum = "OptIn"
	EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnumVoluntaryJoiner    EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum = "VoluntaryJoiner"
	EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnumContractualPension EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum = "ContractualPension"
	EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnumCeasedMembership   EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum = "CeasedMembership"
	EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnumLeaver             EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum = "Leaver"
	EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnumExcluded           EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum = "Excluded"
)

type EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum string

const (
	EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnumOtherNotKnown                  EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum = "OtherNotKnown"
	EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnumNotAWorker                     EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum = "NotAWorker"
	EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnumNotUkWorker                    EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum = "NotUKWorker"
	EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnumTemporaryUkWorker              EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum = "TemporaryUKWorker"
	EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnumOutsideAgeRange                EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum = "OutsideAgeRange"
	EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnumSingleEmployeeDirector         EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum = "SingleEmployeeDirector"
	EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnumCeasedMembershipWithin12Months EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum = "CeasedMembershipWithin12Months"
	EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnumCeasedMembershipBeyond12Months EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum = "CeasedMembershipBeyond12Months"
	EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnumWorkerWulsWithin12Month        EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum = "WorkerWULSWithin12Month"
	EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnumWorkerWulsBeyond12Month        EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum = "WorkerWULSBeyond12Month"
	EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnumWorkerInNoticePeriod           EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum = "WorkerInNoticePeriod"
	EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnumWorkerTaxProtection            EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum = "WorkerTaxProtection"
)

type EmployeeEmployeeAddressAddress struct {
	Address1 *string `json:"Address1,omitempty"`
	Address2 *string `json:"Address2,omitempty"`
	Address3 *string `json:"Address3,omitempty"`
	Address4 *string `json:"Address4,omitempty"`
	Country  *string `json:"Country,omitempty"`
	Postcode *string `json:"Postcode,omitempty"`
}

type EmployeeEmployeeBankAccountBankAccount struct {
	AccountName   *string `json:"AccountName,omitempty"`
	AccountNumber *string `json:"AccountNumber,omitempty"`
	Reference     *string `json:"Reference,omitempty"`
	SortCode      *string `json:"SortCode,omitempty"`
}

type EmployeeEmployeeEmployeePartnerEmployeePartner struct {
	FirstName  *string `json:"FirstName,omitempty"`
	Initials   *string `json:"Initials,omitempty"`
	LastName   *string `json:"LastName,omitempty"`
	MiddleName *string `json:"MiddleName,omitempty"`
	NiNumber   *string `json:"NiNumber,omitempty"`
}

type EmployeeEmployeeGenderGenderEnum string

const (
	EmployeeEmployeeGenderGenderEnumUnknown EmployeeEmployeeGenderGenderEnum = "Unknown"
	EmployeeEmployeeGenderGenderEnumMale    EmployeeEmployeeGenderGenderEnum = "Male"
	EmployeeEmployeeGenderGenderEnumFemale  EmployeeEmployeeGenderGenderEnum = "Female"
)

type EmployeeEmployeeLeaverReasonLeaverReasonEnum string

const (
	EmployeeEmployeeLeaverReasonLeaverReasonEnumResigned     EmployeeEmployeeLeaverReasonLeaverReasonEnum = "Resigned"
	EmployeeEmployeeLeaverReasonLeaverReasonEnumDismissed    EmployeeEmployeeLeaverReasonLeaverReasonEnum = "Dismissed"
	EmployeeEmployeeLeaverReasonLeaverReasonEnumRedundant    EmployeeEmployeeLeaverReasonLeaverReasonEnum = "Redundant"
	EmployeeEmployeeLeaverReasonLeaverReasonEnumRetired      EmployeeEmployeeLeaverReasonLeaverReasonEnum = "Retired"
	EmployeeEmployeeLeaverReasonLeaverReasonEnumDeceased     EmployeeEmployeeLeaverReasonLeaverReasonEnum = "Deceased"
	EmployeeEmployeeLeaverReasonLeaverReasonEnumLegalCustody EmployeeEmployeeLeaverReasonLeaverReasonEnum = "LegalCustody"
	EmployeeEmployeeLeaverReasonLeaverReasonEnumOther        EmployeeEmployeeLeaverReasonLeaverReasonEnum = "Other"
)

type EmployeeEmployeeMaritalStatusMaritalStatusEnum string

const (
	EmployeeEmployeeMaritalStatusMaritalStatusEnumNotSet   EmployeeEmployeeMaritalStatusMaritalStatusEnum = "NotSet"
	EmployeeEmployeeMaritalStatusMaritalStatusEnumSingle   EmployeeEmployeeMaritalStatusMaritalStatusEnum = "Single"
	EmployeeEmployeeMaritalStatusMaritalStatusEnumMarried  EmployeeEmployeeMaritalStatusMaritalStatusEnum = "Married"
	EmployeeEmployeeMaritalStatusMaritalStatusEnumDivorced EmployeeEmployeeMaritalStatusMaritalStatusEnum = "Divorced"
	EmployeeEmployeeMaritalStatusMaritalStatusEnumWidowed  EmployeeEmployeeMaritalStatusMaritalStatusEnum = "Widowed"
)

type EmployeeEmployeeNicLiabilityNicLiabilityEnum string

const (
	EmployeeEmployeeNicLiabilityNicLiabilityEnumHasOtherJob                   EmployeeEmployeeNicLiabilityNicLiabilityEnum = "HasOtherJob"
	EmployeeEmployeeNicLiabilityNicLiabilityEnumIsFemaleEntitledToReducedRate EmployeeEmployeeNicLiabilityNicLiabilityEnum = "IsFemaleEntitledToReducedRate"
	EmployeeEmployeeNicLiabilityNicLiabilityEnumIsNotLiable                   EmployeeEmployeeNicLiabilityNicLiabilityEnum = "IsNotLiable"
	EmployeeEmployeeNicLiabilityNicLiabilityEnumIsContractedOut               EmployeeEmployeeNicLiabilityNicLiabilityEnum = "IsContractedOut"
	EmployeeEmployeeNicLiabilityNicLiabilityEnumIsFullyLiable                 EmployeeEmployeeNicLiabilityNicLiabilityEnum = "IsFullyLiable"
	EmployeeEmployeeNicLiabilityNicLiabilityEnumIsApprentice                  EmployeeEmployeeNicLiabilityNicLiabilityEnum = "IsApprentice"
	EmployeeEmployeeNicLiabilityNicLiabilityEnumLeaverBeyond6Weeks            EmployeeEmployeeNicLiabilityNicLiabilityEnum = "LeaverBeyond6Weeks"
	EmployeeEmployeeNicLiabilityNicLiabilityEnumPaymentAfterLeaving           EmployeeEmployeeNicLiabilityNicLiabilityEnum = "PaymentAfterLeaving"
)

type EmployeeEmployeePaySchedulePaySchedule struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type EmployeeEmployeePaymentMethodPaymentMethodEnum string

const (
	EmployeeEmployeePaymentMethodPaymentMethodEnumNotSet         EmployeeEmployeePaymentMethodPaymentMethodEnum = "NotSet"
	EmployeeEmployeePaymentMethodPaymentMethodEnumCash           EmployeeEmployeePaymentMethodPaymentMethodEnum = "Cash"
	EmployeeEmployeePaymentMethodPaymentMethodEnumCheque         EmployeeEmployeePaymentMethodPaymentMethodEnum = "Cheque"
	EmployeeEmployeePaymentMethodPaymentMethodEnumBacs           EmployeeEmployeePaymentMethodPaymentMethodEnum = "BACS"
	EmployeeEmployeePaymentMethodPaymentMethodEnumFasterPayments EmployeeEmployeePaymentMethodPaymentMethodEnum = "FasterPayments"
	EmployeeEmployeePaymentMethodPaymentMethodEnumOther          EmployeeEmployeePaymentMethodPaymentMethodEnum = "Other"
)

type EmployeeEmployeeRegionRegionEnum string

const (
	EmployeeEmployeeRegionRegionEnumNotSet   EmployeeEmployeeRegionRegionEnum = "NotSet"
	EmployeeEmployeeRegionRegionEnumEngland  EmployeeEmployeeRegionRegionEnum = "England"
	EmployeeEmployeeRegionRegionEnumScotland EmployeeEmployeeRegionRegionEnum = "Scotland"
	EmployeeEmployeeRegionRegionEnumWales    EmployeeEmployeeRegionRegionEnum = "Wales"
)

type EmployeeEmployeeRuleExclusionsRuleExclusionsEnum string

const (
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumNone                                  EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "None"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumNiMissingPayInstructionRule           EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "NiMissingPayInstructionRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumTaxMissingPayInstructionRule          EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "TaxMissingPayInstructionRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumTaxCodeUpliftRule                     EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "TaxCodeUpliftRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumNiSetExpectedLetterRule               EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "NiSetExpectedLetterRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumNiDateOfBirthChangeRetrospectiveCRule EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "NiDateOfBirthChangeRetrospectiveCRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumNiDefermentStatusChangeRule           EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "NiDefermentStatusChangeRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumNiEndContractedOutTransferRule        EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "NiEndContractedOutTransferRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumPaymentAfterLeavingRule               EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "PaymentAfterLeavingRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumLeaverEndInstructionsRule             EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "LeaverEndInstructionsRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumP45StudentLoanInstructionRule         EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "P45StudentLoanInstructionRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumP45TaxInstructionRule                 EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "P45TaxInstructionRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumP45YtdTaxRule                         EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "P45YtdTaxRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumYtdInstructionRule                    EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "YtdInstructionRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumTaxCodeRegionChangeRule               EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "TaxCodeRegionChangeRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumAutoEnrolmentStatusChangeRule         EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "AutoEnrolmentStatusChangeRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumEmployeeDeceasedRule                  EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "EmployeeDeceasedRule"
	EmployeeEmployeeRuleExclusionsRuleExclusionsEnumBenefitInstructionAutoEndRule         EmployeeEmployeeRuleExclusionsRuleExclusionsEnum = "BenefitInstructionAutoEndRule"
)

type EmployeeEmployeeSecondedSecondedEnum string

const (
	EmployeeEmployeeSecondedSecondedEnumNotSet              EmployeeEmployeeSecondedSecondedEnum = "NotSet"
	EmployeeEmployeeSecondedSecondedEnumStay183DaysOrMore   EmployeeEmployeeSecondedSecondedEnum = "Stay183DaysOrMore"
	EmployeeEmployeeSecondedSecondedEnumStayLessThan183Days EmployeeEmployeeSecondedSecondedEnum = "StayLessThan183Days"
	EmployeeEmployeeSecondedSecondedEnumInOutUk             EmployeeEmployeeSecondedSecondedEnum = "InOutUk"
)

type EmployeeEmployeeStarterDeclarationStarterDeclarationEnum string

const (
	EmployeeEmployeeStarterDeclarationStarterDeclarationEnumPreviouslyReported EmployeeEmployeeStarterDeclarationStarterDeclarationEnum = "PreviouslyReported"
	EmployeeEmployeeStarterDeclarationStarterDeclarationEnumA                  EmployeeEmployeeStarterDeclarationStarterDeclarationEnum = "A"
	EmployeeEmployeeStarterDeclarationStarterDeclarationEnumB                  EmployeeEmployeeStarterDeclarationStarterDeclarationEnum = "B"
	EmployeeEmployeeStarterDeclarationStarterDeclarationEnumC                  EmployeeEmployeeStarterDeclarationStarterDeclarationEnum = "C"
)

type EmployeeEmployeeTerritoryTerritoryEnum string

const (
	EmployeeEmployeeTerritoryTerritoryEnumUnitedKingdom EmployeeEmployeeTerritoryTerritoryEnum = "UnitedKingdom"
)

type EmployeeEmployeeWorkingWeekWorkingWeekEnum string

const (
	EmployeeEmployeeWorkingWeekWorkingWeekEnumNone        EmployeeEmployeeWorkingWeekWorkingWeekEnum = "None"
	EmployeeEmployeeWorkingWeekWorkingWeekEnumMonday      EmployeeEmployeeWorkingWeekWorkingWeekEnum = "Monday"
	EmployeeEmployeeWorkingWeekWorkingWeekEnumTuesday     EmployeeEmployeeWorkingWeekWorkingWeekEnum = "Tuesday"
	EmployeeEmployeeWorkingWeekWorkingWeekEnumWednesday   EmployeeEmployeeWorkingWeekWorkingWeekEnum = "Wednesday"
	EmployeeEmployeeWorkingWeekWorkingWeekEnumThursday    EmployeeEmployeeWorkingWeekWorkingWeekEnum = "Thursday"
	EmployeeEmployeeWorkingWeekWorkingWeekEnumFriday      EmployeeEmployeeWorkingWeekWorkingWeekEnum = "Friday"
	EmployeeEmployeeWorkingWeekWorkingWeekEnumAllWeekDays EmployeeEmployeeWorkingWeekWorkingWeekEnum = "AllWeekDays"
	EmployeeEmployeeWorkingWeekWorkingWeekEnumSaturday    EmployeeEmployeeWorkingWeekWorkingWeekEnum = "Saturday"
	EmployeeEmployeeWorkingWeekWorkingWeekEnumSunday      EmployeeEmployeeWorkingWeekWorkingWeekEnum = "Sunday"
	EmployeeEmployeeWorkingWeekWorkingWeekEnumAllDays     EmployeeEmployeeWorkingWeekWorkingWeekEnum = "AllDays"
)

type EmployeeEmployeeEmployee struct {
	AeAssessmentOverride        *EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum   `json:"AEAssessmentOverride,omitempty"`
	AeAssessmentOverrideDate    *time.Time                                                      `json:"AEAssessmentOverrideDate,omitempty"`
	AeExclusionReasonCode       *EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum `json:"AEExclusionReasonCode,omitempty"`
	AePostponementDate          *time.Time                                                      `json:"AEPostponementDate,omitempty"`
	Address                     *EmployeeEmployeeAddressAddress                                 `json:"Address,omitempty"`
	BankAccount                 *EmployeeEmployeeBankAccountBankAccount                         `json:"BankAccount,omitempty"`
	Code                        *string                                                         `json:"Code,omitempty"`
	DateOfBirth                 *time.Time                                                      `json:"DateOfBirth,omitempty"`
	Deactivated                 *bool                                                           `json:"Deactivated,omitempty"`
	DirectorshipAppointmentDate *time.Time                                                      `json:"DirectorshipAppointmentDate,omitempty"`
	EeaCitizen                  *bool                                                           `json:"EEACitizen,omitempty"`
	Epm6                        *bool                                                           `json:"EPM6,omitempty"`
	EffectiveDate               *time.Time                                                      `json:"EffectiveDate,omitempty"`
	EmployeePartner             *EmployeeEmployeeEmployeePartnerEmployeePartner                 `json:"EmployeePartner,omitempty"`
	FirstName                   *string                                                         `json:"FirstName,omitempty"`
	Gender                      *EmployeeEmployeeGenderGenderEnum                               `json:"Gender,omitempty"`
	HoursPerWeek                *float64                                                        `json:"HoursPerWeek,omitempty"`
	Initials                    *string                                                         `json:"Initials,omitempty"`
	IrregularEmployment         *bool                                                           `json:"IrregularEmployment,omitempty"`
	IsAgencyWorker              *bool                                                           `json:"IsAgencyWorker,omitempty"`
	LastName                    *string                                                         `json:"LastName,omitempty"`
	LeaverReason                *EmployeeEmployeeLeaverReasonLeaverReasonEnum                   `json:"LeaverReason,omitempty"`
	LeavingDate                 *time.Time                                                      `json:"LeavingDate,omitempty"`
	MaritalStatus               *EmployeeEmployeeMaritalStatusMaritalStatusEnum                 `json:"MaritalStatus,omitempty"`
	MetaData                    map[string]interface{}                                          `json:"MetaData,omitempty"`
	MiddleName                  *string                                                         `json:"MiddleName,omitempty"`
	NiNumber                    *string                                                         `json:"NiNumber,omitempty"`
	NicLiability                *EmployeeEmployeeNicLiabilityNicLiabilityEnum                   `json:"NicLiability,omitempty"`
	OffPayrollWorker            *bool                                                           `json:"OffPayrollWorker,omitempty"`
	OnStrike                    *bool                                                           `json:"OnStrike,omitempty"`
	PassportNumber              *string                                                         `json:"PassportNumber,omitempty"`
	PaySchedule                 *EmployeeEmployeePaySchedulePaySchedule                         `json:"PaySchedule,omitempty"`
	PaymentMethod               *EmployeeEmployeePaymentMethodPaymentMethodEnum                 `json:"PaymentMethod,omitempty"`
	PaymentToANonIndividual     *bool                                                           `json:"PaymentToANonIndividual,omitempty"`
	Region                      *EmployeeEmployeeRegionRegionEnum                               `json:"Region,omitempty"`
	Revision                    *int32                                                          `json:"Revision,omitempty"`
	RuleExclusions              *EmployeeEmployeeRuleExclusionsRuleExclusionsEnum               `json:"RuleExclusions,omitempty"`
	Seconded                    *EmployeeEmployeeSecondedSecondedEnum                           `json:"Seconded,omitempty"`
	StartDate                   *time.Time                                                      `json:"StartDate,omitempty"`
	StarterDeclaration          *EmployeeEmployeeStarterDeclarationStarterDeclarationEnum       `json:"StarterDeclaration,omitempty"`
	Territory                   *EmployeeEmployeeTerritoryTerritoryEnum                         `json:"Territory,omitempty"`
	Title                       *string                                                         `json:"Title,omitempty"`
	WorkingWeek                 *EmployeeEmployeeWorkingWeekWorkingWeekEnum                     `json:"WorkingWeek,omitempty"`
}

type Employee struct {
	Employee *EmployeeEmployeeEmployee `json:"Employee,omitempty"`
}
