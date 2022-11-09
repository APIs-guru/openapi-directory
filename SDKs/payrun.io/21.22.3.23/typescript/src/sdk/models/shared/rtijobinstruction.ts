import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RtiJobInstructionRtiJobInstructionEmployer
/** 
 * The rti job instructions' employer
**/
export class RtiJobInstructionRtiJobInstructionEmployer extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum RtiJobInstructionRtiJobInstructionLateReasonEnum {
    A = "A"
,    B = "B"
,    C = "C"
,    D = "D"
,    F = "F"
,    G = "G"
,    H = "H"
}


// RtiJobInstructionRtiJobInstructionPaySchedule
/** 
 * The rti job instructions' pay schedule
**/
export class RtiJobInstructionRtiJobInstructionPaySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


// RtiJobInstructionRtiJobInstructionRtiTransaction
/** 
 * The rti job instructions' rti transaction
**/
export class RtiJobInstructionRtiJobInstructionRtiTransaction extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class RtiJobInstructionRtiJobInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=EarlierTaxYear" })
  earlierTaxYear?: number;

  @Metadata({ data: "json, name=Employer" })
  employer?: RtiJobInstructionRtiJobInstructionEmployer;

  @Metadata({ data: "json, name=FinalSubmissionForYear" })
  finalSubmissionForYear?: boolean;

  @Metadata({ data: "json, name=Generate" })
  generate?: boolean;

  @Metadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @Metadata({ data: "json, name=LateReason" })
  lateReason?: RtiJobInstructionRtiJobInstructionLateReasonEnum;

  @Metadata({ data: "json, name=NoPaymentForPeriodFrom" })
  noPaymentForPeriodFrom?: Date;

  @Metadata({ data: "json, name=NoPaymentForPeriodTo" })
  noPaymentForPeriodTo?: Date;

  @Metadata({ data: "json, name=PaySchedule" })
  paySchedule?: RtiJobInstructionRtiJobInstructionPaySchedule;

  @Metadata({ data: "json, name=PaymentDate" })
  paymentDate?: Date;

  @Metadata({ data: "json, name=PeriodOfInactivityFrom" })
  periodOfInactivityFrom?: Date;

  @Metadata({ data: "json, name=PeriodOfInactivityTo" })
  periodOfInactivityTo?: Date;

  @Metadata({ data: "json, name=RtiTransaction" })
  rtiTransaction?: RtiJobInstructionRtiJobInstructionRtiTransaction;

  @Metadata({ data: "json, name=RtiType" })
  rtiType?: string;

  @Metadata({ data: "json, name=SchemeCeased" })
  schemeCeased?: Date;

  @Metadata({ data: "json, name=TaxMonth" })
  taxMonth?: number;

  @Metadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @Metadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @Metadata({ data: "json, name=Transmit" })
  transmit?: boolean;
}


export class RtiJobInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=RtiJobInstruction" })
  rtiJobInstruction?: RtiJobInstructionRtiJobInstruction;
}
