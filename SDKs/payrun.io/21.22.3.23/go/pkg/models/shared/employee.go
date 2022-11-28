package shared

import (
	"time"
)

type EmployeeEmployeeAeAssessmentOverrideEnum string

const (
	EmployeeEmployeeAeAssessmentOverrideEnumNone               EmployeeEmployeeAeAssessmentOverrideEnum = "None"
	EmployeeEmployeeAeAssessmentOverrideEnumOptOut             EmployeeEmployeeAeAssessmentOverrideEnum = "OptOut"
	EmployeeEmployeeAeAssessmentOverrideEnumOptIn              EmployeeEmployeeAeAssessmentOverrideEnum = "OptIn"
	EmployeeEmployeeAeAssessmentOverrideEnumVoluntaryJoiner    EmployeeEmployeeAeAssessmentOverrideEnum = "VoluntaryJoiner"
	EmployeeEmployeeAeAssessmentOverrideEnumContractualPension EmployeeEmployeeAeAssessmentOverrideEnum = "ContractualPension"
	EmployeeEmployeeAeAssessmentOverrideEnumCeasedMembership   EmployeeEmployeeAeAssessmentOverrideEnum = "CeasedMembership"
	EmployeeEmployeeAeAssessmentOverrideEnumLeaver             EmployeeEmployeeAeAssessmentOverrideEnum = "Leaver"
	EmployeeEmployeeAeAssessmentOverrideEnumExcluded           EmployeeEmployeeAeAssessmentOverrideEnum = "Excluded"
)

type EmployeeEmployeeAeExclusionReasonCodeEnum string

const (
	EmployeeEmployeeAeExclusionReasonCodeEnumOtherNotKnown                  EmployeeEmployeeAeExclusionReasonCodeEnum = "OtherNotKnown"
	EmployeeEmployeeAeExclusionReasonCodeEnumNotAWorker                     EmployeeEmployeeAeExclusionReasonCodeEnum = "NotAWorker"
	EmployeeEmployeeAeExclusionReasonCodeEnumNotUkWorker                    EmployeeEmployeeAeExclusionReasonCodeEnum = "NotUKWorker"
	EmployeeEmployeeAeExclusionReasonCodeEnumTemporaryUkWorker              EmployeeEmployeeAeExclusionReasonCodeEnum = "TemporaryUKWorker"
	EmployeeEmployeeAeExclusionReasonCodeEnumOutsideAgeRange                EmployeeEmployeeAeExclusionReasonCodeEnum = "OutsideAgeRange"
	EmployeeEmployeeAeExclusionReasonCodeEnumSingleEmployeeDirector         EmployeeEmployeeAeExclusionReasonCodeEnum = "SingleEmployeeDirector"
	EmployeeEmployeeAeExclusionReasonCodeEnumCeasedMembershipWithin12Months EmployeeEmployeeAeExclusionReasonCodeEnum = "CeasedMembershipWithin12Months"
	EmployeeEmployeeAeExclusionReasonCodeEnumCeasedMembershipBeyond12Months EmployeeEmployeeAeExclusionReasonCodeEnum = "CeasedMembershipBeyond12Months"
	EmployeeEmployeeAeExclusionReasonCodeEnumWorkerWulsWithin12Month        EmployeeEmployeeAeExclusionReasonCodeEnum = "WorkerWULSWithin12Month"
	EmployeeEmployeeAeExclusionReasonCodeEnumWorkerWulsBeyond12Month        EmployeeEmployeeAeExclusionReasonCodeEnum = "WorkerWULSBeyond12Month"
	EmployeeEmployeeAeExclusionReasonCodeEnumWorkerInNoticePeriod           EmployeeEmployeeAeExclusionReasonCodeEnum = "WorkerInNoticePeriod"
	EmployeeEmployeeAeExclusionReasonCodeEnumWorkerTaxProtection            EmployeeEmployeeAeExclusionReasonCodeEnum = "WorkerTaxProtection"
)

// EmployeeEmployeeAddress
// The employees' address
type EmployeeEmployeeAddress struct {
	Address1 *string `json:"Address1,omitempty"`
	Address2 *string `json:"Address2,omitempty"`
	Address3 *string `json:"Address3,omitempty"`
	Address4 *string `json:"Address4,omitempty"`
	Country  *string `json:"Country,omitempty"`
	Postcode *string `json:"Postcode,omitempty"`
}

// EmployeeEmployeeBankAccount
// The employees' bank account
type EmployeeEmployeeBankAccount struct {
	AccountName   *string `json:"AccountName,omitempty"`
	AccountNumber *string `json:"AccountNumber,omitempty"`
	Reference     *string `json:"Reference,omitempty"`
	SortCode      *string `json:"SortCode,omitempty"`
}

// EmployeeEmployeeEmployeePartner
// The employees' employee partner
type EmployeeEmployeeEmployeePartner struct {
	FirstName  *string `json:"FirstName,omitempty"`
	Initials   *string `json:"Initials,omitempty"`
	LastName   *string `json:"LastName,omitempty"`
	MiddleName *string `json:"MiddleName,omitempty"`
	NiNumber   *string `json:"NiNumber,omitempty"`
}

type EmployeeEmployeeGenderEnum string

const (
	EmployeeEmployeeGenderEnumUnknown EmployeeEmployeeGenderEnum = "Unknown"
	EmployeeEmployeeGenderEnumMale    EmployeeEmployeeGenderEnum = "Male"
	EmployeeEmployeeGenderEnumFemale  EmployeeEmployeeGenderEnum = "Female"
)

type EmployeeEmployeeLeaverReasonEnum string

const (
	EmployeeEmployeeLeaverReasonEnumResigned     EmployeeEmployeeLeaverReasonEnum = "Resigned"
	EmployeeEmployeeLeaverReasonEnumDismissed    EmployeeEmployeeLeaverReasonEnum = "Dismissed"
	EmployeeEmployeeLeaverReasonEnumRedundant    EmployeeEmployeeLeaverReasonEnum = "Redundant"
	EmployeeEmployeeLeaverReasonEnumRetired      EmployeeEmployeeLeaverReasonEnum = "Retired"
	EmployeeEmployeeLeaverReasonEnumDeceased     EmployeeEmployeeLeaverReasonEnum = "Deceased"
	EmployeeEmployeeLeaverReasonEnumLegalCustody EmployeeEmployeeLeaverReasonEnum = "LegalCustody"
	EmployeeEmployeeLeaverReasonEnumOther        EmployeeEmployeeLeaverReasonEnum = "Other"
)

type EmployeeEmployeeMaritalStatusEnum string

const (
	EmployeeEmployeeMaritalStatusEnumNotSet   EmployeeEmployeeMaritalStatusEnum = "NotSet"
	EmployeeEmployeeMaritalStatusEnumSingle   EmployeeEmployeeMaritalStatusEnum = "Single"
	EmployeeEmployeeMaritalStatusEnumMarried  EmployeeEmployeeMaritalStatusEnum = "Married"
	EmployeeEmployeeMaritalStatusEnumDivorced EmployeeEmployeeMaritalStatusEnum = "Divorced"
	EmployeeEmployeeMaritalStatusEnumWidowed  EmployeeEmployeeMaritalStatusEnum = "Widowed"
)

type EmployeeEmployeeNicLiabilityEnum string

const (
	EmployeeEmployeeNicLiabilityEnumHasOtherJob                   EmployeeEmployeeNicLiabilityEnum = "HasOtherJob"
	EmployeeEmployeeNicLiabilityEnumIsFemaleEntitledToReducedRate EmployeeEmployeeNicLiabilityEnum = "IsFemaleEntitledToReducedRate"
	EmployeeEmployeeNicLiabilityEnumIsNotLiable                   EmployeeEmployeeNicLiabilityEnum = "IsNotLiable"
	EmployeeEmployeeNicLiabilityEnumIsContractedOut               EmployeeEmployeeNicLiabilityEnum = "IsContractedOut"
	EmployeeEmployeeNicLiabilityEnumIsFullyLiable                 EmployeeEmployeeNicLiabilityEnum = "IsFullyLiable"
	EmployeeEmployeeNicLiabilityEnumIsApprentice                  EmployeeEmployeeNicLiabilityEnum = "IsApprentice"
	EmployeeEmployeeNicLiabilityEnumLeaverBeyond6Weeks            EmployeeEmployeeNicLiabilityEnum = "LeaverBeyond6Weeks"
	EmployeeEmployeeNicLiabilityEnumPaymentAfterLeaving           EmployeeEmployeeNicLiabilityEnum = "PaymentAfterLeaving"
)

// EmployeeEmployeePaySchedule
// The employees' pay schedule
type EmployeeEmployeePaySchedule struct {
	AtHref  *string `json:"@href,omitempty"`
	AtRel   *string `json:"@rel,omitempty"`
	AtTitle *string `json:"@title,omitempty"`
}

type EmployeeEmployeePaymentMethodEnum string

const (
	EmployeeEmployeePaymentMethodEnumNotSet         EmployeeEmployeePaymentMethodEnum = "NotSet"
	EmployeeEmployeePaymentMethodEnumCash           EmployeeEmployeePaymentMethodEnum = "Cash"
	EmployeeEmployeePaymentMethodEnumCheque         EmployeeEmployeePaymentMethodEnum = "Cheque"
	EmployeeEmployeePaymentMethodEnumBacs           EmployeeEmployeePaymentMethodEnum = "BACS"
	EmployeeEmployeePaymentMethodEnumFasterPayments EmployeeEmployeePaymentMethodEnum = "FasterPayments"
	EmployeeEmployeePaymentMethodEnumOther          EmployeeEmployeePaymentMethodEnum = "Other"
)

type EmployeeEmployeeRegionEnum string

const (
	EmployeeEmployeeRegionEnumNotSet   EmployeeEmployeeRegionEnum = "NotSet"
	EmployeeEmployeeRegionEnumEngland  EmployeeEmployeeRegionEnum = "England"
	EmployeeEmployeeRegionEnumScotland EmployeeEmployeeRegionEnum = "Scotland"
	EmployeeEmployeeRegionEnumWales    EmployeeEmployeeRegionEnum = "Wales"
)

type EmployeeEmployeeRuleExclusionsEnum string

const (
	EmployeeEmployeeRuleExclusionsEnumNone                                  EmployeeEmployeeRuleExclusionsEnum = "None"
	EmployeeEmployeeRuleExclusionsEnumNiMissingPayInstructionRule           EmployeeEmployeeRuleExclusionsEnum = "NiMissingPayInstructionRule"
	EmployeeEmployeeRuleExclusionsEnumTaxMissingPayInstructionRule          EmployeeEmployeeRuleExclusionsEnum = "TaxMissingPayInstructionRule"
	EmployeeEmployeeRuleExclusionsEnumTaxCodeUpliftRule                     EmployeeEmployeeRuleExclusionsEnum = "TaxCodeUpliftRule"
	EmployeeEmployeeRuleExclusionsEnumNiSetExpectedLetterRule               EmployeeEmployeeRuleExclusionsEnum = "NiSetExpectedLetterRule"
	EmployeeEmployeeRuleExclusionsEnumNiDateOfBirthChangeRetrospectiveCRule EmployeeEmployeeRuleExclusionsEnum = "NiDateOfBirthChangeRetrospectiveCRule"
	EmployeeEmployeeRuleExclusionsEnumNiDefermentStatusChangeRule           EmployeeEmployeeRuleExclusionsEnum = "NiDefermentStatusChangeRule"
	EmployeeEmployeeRuleExclusionsEnumNiEndContractedOutTransferRule        EmployeeEmployeeRuleExclusionsEnum = "NiEndContractedOutTransferRule"
	EmployeeEmployeeRuleExclusionsEnumPaymentAfterLeavingRule               EmployeeEmployeeRuleExclusionsEnum = "PaymentAfterLeavingRule"
	EmployeeEmployeeRuleExclusionsEnumLeaverEndInstructionsRule             EmployeeEmployeeRuleExclusionsEnum = "LeaverEndInstructionsRule"
	EmployeeEmployeeRuleExclusionsEnumP45StudentLoanInstructionRule         EmployeeEmployeeRuleExclusionsEnum = "P45StudentLoanInstructionRule"
	EmployeeEmployeeRuleExclusionsEnumP45TaxInstructionRule                 EmployeeEmployeeRuleExclusionsEnum = "P45TaxInstructionRule"
	EmployeeEmployeeRuleExclusionsEnumP45YtdTaxRule                         EmployeeEmployeeRuleExclusionsEnum = "P45YtdTaxRule"
	EmployeeEmployeeRuleExclusionsEnumYtdInstructionRule                    EmployeeEmployeeRuleExclusionsEnum = "YtdInstructionRule"
	EmployeeEmployeeRuleExclusionsEnumTaxCodeRegionChangeRule               EmployeeEmployeeRuleExclusionsEnum = "TaxCodeRegionChangeRule"
	EmployeeEmployeeRuleExclusionsEnumAutoEnrolmentStatusChangeRule         EmployeeEmployeeRuleExclusionsEnum = "AutoEnrolmentStatusChangeRule"
	EmployeeEmployeeRuleExclusionsEnumEmployeeDeceasedRule                  EmployeeEmployeeRuleExclusionsEnum = "EmployeeDeceasedRule"
	EmployeeEmployeeRuleExclusionsEnumBenefitInstructionAutoEndRule         EmployeeEmployeeRuleExclusionsEnum = "BenefitInstructionAutoEndRule"
)

type EmployeeEmployeeSecondedEnum string

const (
	EmployeeEmployeeSecondedEnumNotSet              EmployeeEmployeeSecondedEnum = "NotSet"
	EmployeeEmployeeSecondedEnumStay183DaysOrMore   EmployeeEmployeeSecondedEnum = "Stay183DaysOrMore"
	EmployeeEmployeeSecondedEnumStayLessThan183Days EmployeeEmployeeSecondedEnum = "StayLessThan183Days"
	EmployeeEmployeeSecondedEnumInOutUk             EmployeeEmployeeSecondedEnum = "InOutUk"
)

type EmployeeEmployeeStarterDeclarationEnum string

const (
	EmployeeEmployeeStarterDeclarationEnumPreviouslyReported EmployeeEmployeeStarterDeclarationEnum = "PreviouslyReported"
	EmployeeEmployeeStarterDeclarationEnumA                  EmployeeEmployeeStarterDeclarationEnum = "A"
	EmployeeEmployeeStarterDeclarationEnumB                  EmployeeEmployeeStarterDeclarationEnum = "B"
	EmployeeEmployeeStarterDeclarationEnumC                  EmployeeEmployeeStarterDeclarationEnum = "C"
)

type EmployeeEmployeeTerritoryEnum string

const (
	EmployeeEmployeeTerritoryEnumUnitedKingdom EmployeeEmployeeTerritoryEnum = "UnitedKingdom"
)

type EmployeeEmployeeWorkingWeekEnum string

const (
	EmployeeEmployeeWorkingWeekEnumNone        EmployeeEmployeeWorkingWeekEnum = "None"
	EmployeeEmployeeWorkingWeekEnumMonday      EmployeeEmployeeWorkingWeekEnum = "Monday"
	EmployeeEmployeeWorkingWeekEnumTuesday     EmployeeEmployeeWorkingWeekEnum = "Tuesday"
	EmployeeEmployeeWorkingWeekEnumWednesday   EmployeeEmployeeWorkingWeekEnum = "Wednesday"
	EmployeeEmployeeWorkingWeekEnumThursday    EmployeeEmployeeWorkingWeekEnum = "Thursday"
	EmployeeEmployeeWorkingWeekEnumFriday      EmployeeEmployeeWorkingWeekEnum = "Friday"
	EmployeeEmployeeWorkingWeekEnumAllWeekDays EmployeeEmployeeWorkingWeekEnum = "AllWeekDays"
	EmployeeEmployeeWorkingWeekEnumSaturday    EmployeeEmployeeWorkingWeekEnum = "Saturday"
	EmployeeEmployeeWorkingWeekEnumSunday      EmployeeEmployeeWorkingWeekEnum = "Sunday"
	EmployeeEmployeeWorkingWeekEnumAllDays     EmployeeEmployeeWorkingWeekEnum = "AllDays"
)

type EmployeeEmployee struct {
	AeAssessmentOverride        *EmployeeEmployeeAeAssessmentOverrideEnum  `json:"AEAssessmentOverride,omitempty"`
	AeAssessmentOverrideDate    *time.Time                                 `json:"AEAssessmentOverrideDate,omitempty"`
	AeExclusionReasonCode       *EmployeeEmployeeAeExclusionReasonCodeEnum `json:"AEExclusionReasonCode,omitempty"`
	AePostponementDate          *time.Time                                 `json:"AEPostponementDate,omitempty"`
	Address                     *EmployeeEmployeeAddress                   `json:"Address,omitempty"`
	BankAccount                 *EmployeeEmployeeBankAccount               `json:"BankAccount,omitempty"`
	Code                        *string                                    `json:"Code,omitempty"`
	DateOfBirth                 *time.Time                                 `json:"DateOfBirth,omitempty"`
	Deactivated                 *bool                                      `json:"Deactivated,omitempty"`
	DirectorshipAppointmentDate *time.Time                                 `json:"DirectorshipAppointmentDate,omitempty"`
	EeaCitizen                  *bool                                      `json:"EEACitizen,omitempty"`
	Epm6                        *bool                                      `json:"EPM6,omitempty"`
	EffectiveDate               *time.Time                                 `json:"EffectiveDate,omitempty"`
	EmployeePartner             *EmployeeEmployeeEmployeePartner           `json:"EmployeePartner,omitempty"`
	FirstName                   *string                                    `json:"FirstName,omitempty"`
	Gender                      *EmployeeEmployeeGenderEnum                `json:"Gender,omitempty"`
	HoursPerWeek                *float64                                   `json:"HoursPerWeek,omitempty"`
	Initials                    *string                                    `json:"Initials,omitempty"`
	IrregularEmployment         *bool                                      `json:"IrregularEmployment,omitempty"`
	IsAgencyWorker              *bool                                      `json:"IsAgencyWorker,omitempty"`
	LastName                    *string                                    `json:"LastName,omitempty"`
	LeaverReason                *EmployeeEmployeeLeaverReasonEnum          `json:"LeaverReason,omitempty"`
	LeavingDate                 *time.Time                                 `json:"LeavingDate,omitempty"`
	MaritalStatus               *EmployeeEmployeeMaritalStatusEnum         `json:"MaritalStatus,omitempty"`
	MetaData                    map[string]interface{}                     `json:"MetaData,omitempty"`
	MiddleName                  *string                                    `json:"MiddleName,omitempty"`
	NiNumber                    *string                                    `json:"NiNumber,omitempty"`
	NicLiability                *EmployeeEmployeeNicLiabilityEnum          `json:"NicLiability,omitempty"`
	OffPayrollWorker            *bool                                      `json:"OffPayrollWorker,omitempty"`
	OnStrike                    *bool                                      `json:"OnStrike,omitempty"`
	PassportNumber              *string                                    `json:"PassportNumber,omitempty"`
	PaySchedule                 *EmployeeEmployeePaySchedule               `json:"PaySchedule,omitempty"`
	PaymentMethod               *EmployeeEmployeePaymentMethodEnum         `json:"PaymentMethod,omitempty"`
	PaymentToANonIndividual     *bool                                      `json:"PaymentToANonIndividual,omitempty"`
	Region                      *EmployeeEmployeeRegionEnum                `json:"Region,omitempty"`
	Revision                    *int32                                     `json:"Revision,omitempty"`
	RuleExclusions              *EmployeeEmployeeRuleExclusionsEnum        `json:"RuleExclusions,omitempty"`
	Seconded                    *EmployeeEmployeeSecondedEnum              `json:"Seconded,omitempty"`
	StartDate                   *time.Time                                 `json:"StartDate,omitempty"`
	StarterDeclaration          *EmployeeEmployeeStarterDeclarationEnum    `json:"StarterDeclaration,omitempty"`
	Territory                   *EmployeeEmployeeTerritoryEnum             `json:"Territory,omitempty"`
	Title                       *string                                    `json:"Title,omitempty"`
	WorkingWeek                 *EmployeeEmployeeWorkingWeekEnum           `json:"WorkingWeek,omitempty"`
}

type Employee struct {
	Employee *EmployeeEmployee `json:"Employee,omitempty"`
}
