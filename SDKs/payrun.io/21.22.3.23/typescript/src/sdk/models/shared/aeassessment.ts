import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AeAssessmentAeAssessmentAssessmentCodeEnum {
    Excluded = "Excluded",
    EligibleJobHolder = "EligibleJobHolder",
    NonEligibleJobHolder = "NonEligibleJobHolder",
    EntitledWorker = "EntitledWorker"
}

export enum AeAssessmentAeAssessmentAssessmentEventEnum {
    NonEnrolmentEvent = "NonEnrolmentEvent",
    AutomaticEnrolment = "AutomaticEnrolment",
    OptIn = "OptIn",
    VoluntaryJoiner = "VoluntaryJoiner",
    ContractualEnrolment = "ContractualEnrolment"
}

export enum AeAssessmentAeAssessmentAssessmentOverrideEnum {
    None = "None",
    OptOut = "OptOut",
    OptIn = "OptIn",
    VoluntaryJoiner = "VoluntaryJoiner",
    ContractualPension = "ContractualPension",
    CeasedMembership = "CeasedMembership",
    Leaver = "Leaver",
    Excluded = "Excluded"
}

export enum AeAssessmentAeAssessmentAssessmentResultEnum {
    Inconclusive = "Inconclusive",
    NoChange = "NoChange",
    Enrol = "Enrol",
    Exit = "Exit"
}


export class AeAssessmentAeAssessment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Age" })
  age?: number;

  @SpeakeasyMetadata({ data: "json, name=AssessmentCode" })
  assessmentCode?: AeAssessmentAeAssessmentAssessmentCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=AssessmentDate" })
  assessmentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=AssessmentEvent" })
  assessmentEvent?: AeAssessmentAeAssessmentAssessmentEventEnum;

  @SpeakeasyMetadata({ data: "json, name=AssessmentOverride" })
  assessmentOverride?: AeAssessmentAeAssessmentAssessmentOverrideEnum;

  @SpeakeasyMetadata({ data: "json, name=AssessmentResult" })
  assessmentResult?: AeAssessmentAeAssessmentAssessmentResultEnum;

  @SpeakeasyMetadata({ data: "json, name=IsMemberOfAlternativePensionScheme" })
  isMemberOfAlternativePensionScheme?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OptOutWindowEndDate" })
  optOutWindowEndDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=QualifyingEarnings" })
  qualifyingEarnings?: number;

  @SpeakeasyMetadata({ data: "json, name=ReenrolmentDate" })
  reenrolmentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=StatePensionAge" })
  statePensionAge?: number;

  @SpeakeasyMetadata({ data: "json, name=StatePensionDate" })
  statePensionDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=TaxPeriod" })
  taxPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxYear" })
  taxYear?: number;
}


export class AeAssessment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AEAssessment" })
  aeAssessment?: AeAssessmentAeAssessment;
}
