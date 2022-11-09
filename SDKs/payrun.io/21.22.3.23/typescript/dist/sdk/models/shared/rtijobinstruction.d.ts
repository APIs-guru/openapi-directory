import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The rti job instructions' employer
**/
export declare class RtiJobInstructionRtiJobInstructionEmployer extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare enum RtiJobInstructionRtiJobInstructionLateReasonEnum {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    F = "F",
    G = "G",
    H = "H"
}
/**
 * The rti job instructions' pay schedule
**/
export declare class RtiJobInstructionRtiJobInstructionPaySchedule extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
/**
 * The rti job instructions' rti transaction
**/
export declare class RtiJobInstructionRtiJobInstructionRtiTransaction extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare class RtiJobInstructionRtiJobInstruction extends SpeakeasyBase {
    earlierTaxYear?: number;
    employer?: RtiJobInstructionRtiJobInstructionEmployer;
    finalSubmissionForYear?: boolean;
    generate?: boolean;
    holdingDate?: Date;
    lateReason?: RtiJobInstructionRtiJobInstructionLateReasonEnum;
    noPaymentForPeriodFrom?: Date;
    noPaymentForPeriodTo?: Date;
    paySchedule?: RtiJobInstructionRtiJobInstructionPaySchedule;
    paymentDate?: Date;
    periodOfInactivityFrom?: Date;
    periodOfInactivityTo?: Date;
    rtiTransaction?: RtiJobInstructionRtiJobInstructionRtiTransaction;
    rtiType?: string;
    schemeCeased?: Date;
    taxMonth?: number;
    taxYear?: number;
    timestamp?: Date;
    transmit?: boolean;
}
export declare class RtiJobInstruction extends SpeakeasyBase {
    rtiJobInstruction?: RtiJobInstructionRtiJobInstruction;
}
