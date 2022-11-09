import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AeAssessmentAeAssessmentAssessmentCodeEnum {
    Excluded = "Excluded"
,    EligibleJobHolder = "EligibleJobHolder"
,    NonEligibleJobHolder = "NonEligibleJobHolder"
,    EntitledWorker = "EntitledWorker"
}

export enum AeAssessmentAeAssessmentAssessmentEventEnum {
    NonEnrolmentEvent = "NonEnrolmentEvent"
,    AutomaticEnrolment = "AutomaticEnrolment"
,    OptIn = "OptIn"
,    VoluntaryJoiner = "VoluntaryJoiner"
,    ContractualEnrolment = "ContractualEnrolment"
}

export enum AeAssessmentAeAssessmentAssessmentOverrideEnum {
    None = "None"
,    OptOut = "OptOut"
,    OptIn = "OptIn"
,    VoluntaryJoiner = "VoluntaryJoiner"
,    ContractualPension = "ContractualPension"
,    CeasedMembership = "CeasedMembership"
,    Leaver = "Leaver"
,    Excluded = "Excluded"
}

export enum AeAssessmentAeAssessmentAssessmentResultEnum {
    Inconclusive = "Inconclusive"
,    NoChange = "NoChange"
,    Enrol = "Enrol"
,    Exit = "Exit"
}


export class AeAssessmentAeAssessment extends SpeakeasyBase {
  @Metadata({ data: "json, name=Age" })
  age?: number;

  @Metadata({ data: "json, name=AssessmentCode" })
  assessmentCode?: AeAssessmentAeAssessmentAssessmentCodeEnum;

  @Metadata({ data: "json, name=AssessmentDate" })
  assessmentDate?: Date;

  @Metadata({ data: "json, name=AssessmentEvent" })
  assessmentEvent?: AeAssessmentAeAssessmentAssessmentEventEnum;

  @Metadata({ data: "json, name=AssessmentOverride" })
  assessmentOverride?: AeAssessmentAeAssessmentAssessmentOverrideEnum;

  @Metadata({ data: "json, name=AssessmentResult" })
  assessmentResult?: AeAssessmentAeAssessmentAssessmentResultEnum;

  @Metadata({ data: "json, name=IsMemberOfAlternativePensionScheme" })
  isMemberOfAlternativePensionScheme?: boolean;

  @Metadata({ data: "json, name=OptOutWindowEndDate" })
  optOutWindowEndDate?: Date;

  @Metadata({ data: "json, name=QualifyingEarnings" })
  qualifyingEarnings?: number;

  @Metadata({ data: "json, name=ReenrolmentDate" })
  reenrolmentDate?: Date;

  @Metadata({ data: "json, name=StatePensionAge" })
  statePensionAge?: number;

  @Metadata({ data: "json, name=StatePensionDate" })
  statePensionDate?: Date;

  @Metadata({ data: "json, name=TaxPeriod" })
  taxPeriod?: number;

  @Metadata({ data: "json, name=TaxYear" })
  taxYear?: number;
}


export class AeAssessment extends SpeakeasyBase {
  @Metadata({ data: "json, name=AEAssessment" })
  aeAssessment?: AeAssessmentAeAssessment;
}
