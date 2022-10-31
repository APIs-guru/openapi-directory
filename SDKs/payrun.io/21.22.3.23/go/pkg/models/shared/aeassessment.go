package shared

import (
"time")


type AeAssessmentAeAssessmentAssessmentCodeEnum string

const (
    AeAssessmentAeAssessmentAssessmentCodeEnumExcluded AeAssessmentAeAssessmentAssessmentCodeEnum = "Excluded"
AeAssessmentAeAssessmentAssessmentCodeEnumEligibleJobHolder AeAssessmentAeAssessmentAssessmentCodeEnum = "EligibleJobHolder"
AeAssessmentAeAssessmentAssessmentCodeEnumNonEligibleJobHolder AeAssessmentAeAssessmentAssessmentCodeEnum = "NonEligibleJobHolder"
AeAssessmentAeAssessmentAssessmentCodeEnumEntitledWorker AeAssessmentAeAssessmentAssessmentCodeEnum = "EntitledWorker"
)



type AeAssessmentAeAssessmentAssessmentEventEnum string

const (
    AeAssessmentAeAssessmentAssessmentEventEnumNonEnrolmentEvent AeAssessmentAeAssessmentAssessmentEventEnum = "NonEnrolmentEvent"
AeAssessmentAeAssessmentAssessmentEventEnumAutomaticEnrolment AeAssessmentAeAssessmentAssessmentEventEnum = "AutomaticEnrolment"
AeAssessmentAeAssessmentAssessmentEventEnumOptIn AeAssessmentAeAssessmentAssessmentEventEnum = "OptIn"
AeAssessmentAeAssessmentAssessmentEventEnumVoluntaryJoiner AeAssessmentAeAssessmentAssessmentEventEnum = "VoluntaryJoiner"
AeAssessmentAeAssessmentAssessmentEventEnumContractualEnrolment AeAssessmentAeAssessmentAssessmentEventEnum = "ContractualEnrolment"
)



type AeAssessmentAeAssessmentAssessmentOverrideEnum string

const (
    AeAssessmentAeAssessmentAssessmentOverrideEnumNone AeAssessmentAeAssessmentAssessmentOverrideEnum = "None"
AeAssessmentAeAssessmentAssessmentOverrideEnumOptOut AeAssessmentAeAssessmentAssessmentOverrideEnum = "OptOut"
AeAssessmentAeAssessmentAssessmentOverrideEnumOptIn AeAssessmentAeAssessmentAssessmentOverrideEnum = "OptIn"
AeAssessmentAeAssessmentAssessmentOverrideEnumVoluntaryJoiner AeAssessmentAeAssessmentAssessmentOverrideEnum = "VoluntaryJoiner"
AeAssessmentAeAssessmentAssessmentOverrideEnumContractualPension AeAssessmentAeAssessmentAssessmentOverrideEnum = "ContractualPension"
AeAssessmentAeAssessmentAssessmentOverrideEnumCeasedMembership AeAssessmentAeAssessmentAssessmentOverrideEnum = "CeasedMembership"
AeAssessmentAeAssessmentAssessmentOverrideEnumLeaver AeAssessmentAeAssessmentAssessmentOverrideEnum = "Leaver"
AeAssessmentAeAssessmentAssessmentOverrideEnumExcluded AeAssessmentAeAssessmentAssessmentOverrideEnum = "Excluded"
)



type AeAssessmentAeAssessmentAssessmentResultEnum string

const (
    AeAssessmentAeAssessmentAssessmentResultEnumInconclusive AeAssessmentAeAssessmentAssessmentResultEnum = "Inconclusive"
AeAssessmentAeAssessmentAssessmentResultEnumNoChange AeAssessmentAeAssessmentAssessmentResultEnum = "NoChange"
AeAssessmentAeAssessmentAssessmentResultEnumEnrol AeAssessmentAeAssessmentAssessmentResultEnum = "Enrol"
AeAssessmentAeAssessmentAssessmentResultEnumExit AeAssessmentAeAssessmentAssessmentResultEnum = "Exit"
)


type AeAssessmentAeAssessment struct {
    Age *int32 `json:"Age,omitempty"`
    AssessmentCode *AeAssessmentAeAssessmentAssessmentCodeEnum `json:"AssessmentCode,omitempty"`
    AssessmentDate *time.Time `json:"AssessmentDate,omitempty"`
    AssessmentEvent *AeAssessmentAeAssessmentAssessmentEventEnum `json:"AssessmentEvent,omitempty"`
    AssessmentOverride *AeAssessmentAeAssessmentAssessmentOverrideEnum `json:"AssessmentOverride,omitempty"`
    AssessmentResult *AeAssessmentAeAssessmentAssessmentResultEnum `json:"AssessmentResult,omitempty"`
    IsMemberOfAlternativePensionScheme *bool `json:"IsMemberOfAlternativePensionScheme,omitempty"`
    OptOutWindowEndDate *time.Time `json:"OptOutWindowEndDate,omitempty"`
    QualifyingEarnings *float64 `json:"QualifyingEarnings,omitempty"`
    ReenrolmentDate *time.Time `json:"ReenrolmentDate,omitempty"`
    StatePensionAge *int32 `json:"StatePensionAge,omitempty"`
    StatePensionDate *time.Time `json:"StatePensionDate,omitempty"`
    TaxPeriod *int32 `json:"TaxPeriod,omitempty"`
    TaxYear *int32 `json:"TaxYear,omitempty"`
    
}

type AeAssessment struct {
    AeAssessment *AeAssessmentAeAssessment `json:"AEAssessment,omitempty"`
    
}

