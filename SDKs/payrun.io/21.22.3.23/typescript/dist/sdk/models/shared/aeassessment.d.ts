import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum AeAssessmentAeAssessmentAssessmentCodeEnum {
    Excluded = "Excluded",
    EligibleJobHolder = "EligibleJobHolder",
    NonEligibleJobHolder = "NonEligibleJobHolder",
    EntitledWorker = "EntitledWorker"
}
export declare enum AeAssessmentAeAssessmentAssessmentEventEnum {
    NonEnrolmentEvent = "NonEnrolmentEvent",
    AutomaticEnrolment = "AutomaticEnrolment",
    OptIn = "OptIn",
    VoluntaryJoiner = "VoluntaryJoiner",
    ContractualEnrolment = "ContractualEnrolment"
}
export declare enum AeAssessmentAeAssessmentAssessmentOverrideEnum {
    None = "None",
    OptOut = "OptOut",
    OptIn = "OptIn",
    VoluntaryJoiner = "VoluntaryJoiner",
    ContractualPension = "ContractualPension",
    CeasedMembership = "CeasedMembership",
    Leaver = "Leaver",
    Excluded = "Excluded"
}
export declare enum AeAssessmentAeAssessmentAssessmentResultEnum {
    Inconclusive = "Inconclusive",
    NoChange = "NoChange",
    Enrol = "Enrol",
    Exit = "Exit"
}
export declare class AeAssessmentAeAssessment extends SpeakeasyBase {
    age?: number;
    assessmentCode?: AeAssessmentAeAssessmentAssessmentCodeEnum;
    assessmentDate?: Date;
    assessmentEvent?: AeAssessmentAeAssessmentAssessmentEventEnum;
    assessmentOverride?: AeAssessmentAeAssessmentAssessmentOverrideEnum;
    assessmentResult?: AeAssessmentAeAssessmentAssessmentResultEnum;
    isMemberOfAlternativePensionScheme?: boolean;
    optOutWindowEndDate?: Date;
    qualifyingEarnings?: number;
    reenrolmentDate?: Date;
    statePensionAge?: number;
    statePensionDate?: Date;
    taxPeriod?: number;
    taxYear?: number;
}
export declare class AeAssessment extends SpeakeasyBase {
    aeAssessment?: AeAssessmentAeAssessment;
}
