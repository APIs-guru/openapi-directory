import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RtiJobInstructionRtiJobInstructionEmployer
/** 
 * The rti job instructions' employer
**/
export class RtiJobInstructionRtiJobInstructionEmployer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}

export enum RtiJobInstructionRtiJobInstructionLateReasonEnum {
    A = "A",
    B = "B",
    C = "C",
    D = "D",
    F = "F",
    G = "G",
    H = "H"
}


// RtiJobInstructionRtiJobInstructionPaySchedule
/** 
 * The rti job instructions' pay schedule
**/
export class RtiJobInstructionRtiJobInstructionPaySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


// RtiJobInstructionRtiJobInstructionRtiTransaction
/** 
 * The rti job instructions' rti transaction
**/
export class RtiJobInstructionRtiJobInstructionRtiTransaction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class RtiJobInstructionRtiJobInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EarlierTaxYear" })
  earlierTaxYear?: number;

  @SpeakeasyMetadata({ data: "json, name=Employer" })
  employer?: RtiJobInstructionRtiJobInstructionEmployer;

  @SpeakeasyMetadata({ data: "json, name=FinalSubmissionForYear" })
  finalSubmissionForYear?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Generate" })
  generate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=LateReason" })
  lateReason?: RtiJobInstructionRtiJobInstructionLateReasonEnum;

  @SpeakeasyMetadata({ data: "json, name=NoPaymentForPeriodFrom" })
  noPaymentForPeriodFrom?: Date;

  @SpeakeasyMetadata({ data: "json, name=NoPaymentForPeriodTo" })
  noPaymentForPeriodTo?: Date;

  @SpeakeasyMetadata({ data: "json, name=PaySchedule" })
  paySchedule?: RtiJobInstructionRtiJobInstructionPaySchedule;

  @SpeakeasyMetadata({ data: "json, name=PaymentDate" })
  paymentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=PeriodOfInactivityFrom" })
  periodOfInactivityFrom?: Date;

  @SpeakeasyMetadata({ data: "json, name=PeriodOfInactivityTo" })
  periodOfInactivityTo?: Date;

  @SpeakeasyMetadata({ data: "json, name=RtiTransaction" })
  rtiTransaction?: RtiJobInstructionRtiJobInstructionRtiTransaction;

  @SpeakeasyMetadata({ data: "json, name=RtiType" })
  rtiType?: string;

  @SpeakeasyMetadata({ data: "json, name=SchemeCeased" })
  schemeCeased?: Date;

  @SpeakeasyMetadata({ data: "json, name=TaxMonth" })
  taxMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=TaxYear" })
  taxYear?: number;

  @SpeakeasyMetadata({ data: "json, name=Timestamp" })
  timestamp?: Date;

  @SpeakeasyMetadata({ data: "json, name=Transmit" })
  transmit?: boolean;
}


export class RtiJobInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=RtiJobInstruction" })
  rtiJobInstruction?: RtiJobInstructionRtiJobInstruction;
}
