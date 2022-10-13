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
	Address1 *string `json:"Address1"`
	Address2 *string `json:"Address2"`
	Address3 *string `json:"Address3"`
	Address4 *string `json:"Address4"`
	Country  *string `json:"Country"`
	Postcode *string `json:"Postcode"`
}

type EmployeeEmployeeBankAccountBankAccount struct {
	AccountName   *string `json:"AccountName"`
	AccountNumber *string `json:"AccountNumber"`
	Reference     *string `json:"Reference"`
	SortCode      *string `json:"SortCode"`
}

type EmployeeEmployeeEmployeePartnerEmployeePartner struct {
	FirstName  *string `json:"FirstName"`
	Initials   *string `json:"Initials"`
	LastName   *string `json:"LastName"`
	MiddleName *string `json:"MiddleName"`
	NiNumber   *string `json:"NiNumber"`
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
	AtHref  *string `json:"@href"`
	AtRel   *string `json:"@rel"`
	AtTitle *string `json:"@title"`
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
	AeAssessmentOverride        *EmployeeEmployeeAeAssessmentOverrideAeAssessmentOverrideEnum   `json:"AEAssessmentOverride"`
	AeAssessmentOverrideDate    *time.Time                                                      `json:"AEAssessmentOverrideDate"`
	AeExclusionReasonCode       *EmployeeEmployeeAeExclusionReasonCodeAeExclusionReasonCodeEnum `json:"AEExclusionReasonCode"`
	AePostponementDate          *time.Time                                                      `json:"AEPostponementDate"`
	Address                     *EmployeeEmployeeAddressAddress                                 `json:"Address"`
	BankAccount                 *EmployeeEmployeeBankAccountBankAccount                         `json:"BankAccount"`
	Code                        *string                                                         `json:"Code"`
	DateOfBirth                 *time.Time                                                      `json:"DateOfBirth"`
	Deactivated                 *bool                                                           `json:"Deactivated"`
	DirectorshipAppointmentDate *time.Time                                                      `json:"DirectorshipAppointmentDate"`
	EeaCitizen                  *bool                                                           `json:"EEACitizen"`
	Epm6                        *bool                                                           `json:"EPM6"`
	EffectiveDate               *time.Time                                                      `json:"EffectiveDate"`
	EmployeePartner             *EmployeeEmployeeEmployeePartnerEmployeePartner                 `json:"EmployeePartner"`
	FirstName                   *string                                                         `json:"FirstName"`
	Gender                      *EmployeeEmployeeGenderGenderEnum                               `json:"Gender"`
	HoursPerWeek                *float64                                                        `json:"HoursPerWeek"`
	Initials                    *string                                                         `json:"Initials"`
	IrregularEmployment         *bool                                                           `json:"IrregularEmployment"`
	IsAgencyWorker              *bool                                                           `json:"IsAgencyWorker"`
	LastName                    *string                                                         `json:"LastName"`
	LeaverReason                *EmployeeEmployeeLeaverReasonLeaverReasonEnum                   `json:"LeaverReason"`
	LeavingDate                 *time.Time                                                      `json:"LeavingDate"`
	MaritalStatus               *EmployeeEmployeeMaritalStatusMaritalStatusEnum                 `json:"MaritalStatus"`
	MetaData                    map[string]interface{}                                          `json:"MetaData"`
	MiddleName                  *string                                                         `json:"MiddleName"`
	NiNumber                    *string                                                         `json:"NiNumber"`
	NicLiability                *EmployeeEmployeeNicLiabilityNicLiabilityEnum                   `json:"NicLiability"`
	OffPayrollWorker            *bool                                                           `json:"OffPayrollWorker"`
	OnStrike                    *bool                                                           `json:"OnStrike"`
	PassportNumber              *string                                                         `json:"PassportNumber"`
	PaySchedule                 *EmployeeEmployeePaySchedulePaySchedule                         `json:"PaySchedule"`
	PaymentMethod               *EmployeeEmployeePaymentMethodPaymentMethodEnum                 `json:"PaymentMethod"`
	PaymentToANonIndividual     *bool                                                           `json:"PaymentToANonIndividual"`
	Region                      *EmployeeEmployeeRegionRegionEnum                               `json:"Region"`
	Revision                    *int32                                                          `json:"Revision"`
	RuleExclusions              *EmployeeEmployeeRuleExclusionsRuleExclusionsEnum               `json:"RuleExclusions"`
	Seconded                    *EmployeeEmployeeSecondedSecondedEnum                           `json:"Seconded"`
	StartDate                   *time.Time                                                      `json:"StartDate"`
	StarterDeclaration          *EmployeeEmployeeStarterDeclarationStarterDeclarationEnum       `json:"StarterDeclaration"`
	Territory                   *EmployeeEmployeeTerritoryTerritoryEnum                         `json:"Territory"`
	Title                       *string                                                         `json:"Title"`
	WorkingWeek                 *EmployeeEmployeeWorkingWeekWorkingWeekEnum                     `json:"WorkingWeek"`
}

type Employee struct {
	Employee *EmployeeEmployeeEmployee `json:"Employee"`
}
