package shared

import (
	"time"
)

type AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnum string

const (
	AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnumExcluded             AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnum = "Excluded"
	AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnumEligibleJobHolder    AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnum = "EligibleJobHolder"
	AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnumNonEligibleJobHolder AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnum = "NonEligibleJobHolder"
	AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnumEntitledWorker       AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnum = "EntitledWorker"
)

type AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnum string

const (
	AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnumNonEnrolmentEvent    AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnum = "NonEnrolmentEvent"
	AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnumAutomaticEnrolment   AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnum = "AutomaticEnrolment"
	AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnumOptIn                AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnum = "OptIn"
	AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnumVoluntaryJoiner      AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnum = "VoluntaryJoiner"
	AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnumContractualEnrolment AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnum = "ContractualEnrolment"
)

type AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum string

const (
	AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnumNone               AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum = "None"
	AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnumOptOut             AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum = "OptOut"
	AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnumOptIn              AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum = "OptIn"
	AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnumVoluntaryJoiner    AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum = "VoluntaryJoiner"
	AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnumContractualPension AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum = "ContractualPension"
	AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnumCeasedMembership   AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum = "CeasedMembership"
	AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnumLeaver             AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum = "Leaver"
	AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnumExcluded           AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum = "Excluded"
)

type AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnum string

const (
	AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnumInconclusive AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnum = "Inconclusive"
	AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnumNoChange     AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnum = "NoChange"
	AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnumEnrol        AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnum = "Enrol"
	AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnumExit         AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnum = "Exit"
)

type AeAssessmentAeAssessmentAeAssessment struct {
	Age                                *int32                                                            `json:"Age,omitempty"`
	AssessmentCode                     *AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnum         `json:"AssessmentCode,omitempty"`
	AssessmentDate                     *time.Time                                                        `json:"AssessmentDate,omitempty"`
	AssessmentEvent                    *AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnum       `json:"AssessmentEvent,omitempty"`
	AssessmentOverride                 *AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum `json:"AssessmentOverride,omitempty"`
	AssessmentResult                   *AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnum     `json:"AssessmentResult,omitempty"`
	IsMemberOfAlternativePensionScheme *bool                                                             `json:"IsMemberOfAlternativePensionScheme,omitempty"`
	OptOutWindowEndDate                *time.Time                                                        `json:"OptOutWindowEndDate,omitempty"`
	QualifyingEarnings                 *float64                                                          `json:"QualifyingEarnings,omitempty"`
	ReenrolmentDate                    *time.Time                                                        `json:"ReenrolmentDate,omitempty"`
	StatePensionAge                    *int32                                                            `json:"StatePensionAge,omitempty"`
	StatePensionDate                   *time.Time                                                        `json:"StatePensionDate,omitempty"`
	TaxPeriod                          *int32                                                            `json:"TaxPeriod,omitempty"`
	TaxYear                            *int32                                                            `json:"TaxYear,omitempty"`
}

type AeAssessment struct {
	AeAssessment *AeAssessmentAeAssessmentAeAssessment `json:"AEAssessment,omitempty"`
}
