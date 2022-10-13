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
	Age                                *int32                                                            `json:"Age"`
	AssessmentCode                     *AeAssessmentAeAssessmentAssessmentCodeAssessmentCodeEnum         `json:"AssessmentCode"`
	AssessmentDate                     *time.Time                                                        `json:"AssessmentDate"`
	AssessmentEvent                    *AeAssessmentAeAssessmentAssessmentEventAssessmentEventEnum       `json:"AssessmentEvent"`
	AssessmentOverride                 *AeAssessmentAeAssessmentAssessmentOverrideAssessmentOverrideEnum `json:"AssessmentOverride"`
	AssessmentResult                   *AeAssessmentAeAssessmentAssessmentResultAssessmentResultEnum     `json:"AssessmentResult"`
	IsMemberOfAlternativePensionScheme *bool                                                             `json:"IsMemberOfAlternativePensionScheme"`
	OptOutWindowEndDate                *time.Time                                                        `json:"OptOutWindowEndDate"`
	QualifyingEarnings                 *float64                                                          `json:"QualifyingEarnings"`
	ReenrolmentDate                    *time.Time                                                        `json:"ReenrolmentDate"`
	StatePensionAge                    *int32                                                            `json:"StatePensionAge"`
	StatePensionDate                   *time.Time                                                        `json:"StatePensionDate"`
	TaxPeriod                          *int32                                                            `json:"TaxPeriod"`
	TaxYear                            *int32                                                            `json:"TaxYear"`
}

type AeAssessment struct {
	AeAssessment *AeAssessmentAeAssessmentAeAssessment `json:"AEAssessment"`
}
