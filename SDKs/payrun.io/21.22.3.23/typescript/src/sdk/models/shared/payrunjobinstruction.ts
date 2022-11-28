import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PayRunJobInstructionPayRunJobInstructionEmployee
/** 
 * The pay run job instructions' employees
**/
export class PayRunJobInstructionPayRunJobInstructionEmployee extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Employee" })
  employee?: any[];
}


// PayRunJobInstructionPayRunJobInstructionPaySchedule
/** 
 * The pay run job instructions' pay schedule
**/
export class PayRunJobInstructionPayRunJobInstructionPaySchedule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class PayRunJobInstructionPayRunJobInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Employees" })
  employees?: PayRunJobInstructionPayRunJobInstructionEmployee;

  @SpeakeasyMetadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=IsSupplementary" })
  isSupplementary?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PaySchedule" })
  paySchedule?: PayRunJobInstructionPayRunJobInstructionPaySchedule;

  @SpeakeasyMetadata({ data: "json, name=PaymentDate" })
  paymentDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=StartDate" })
  startDate?: Date;
}


export class PayRunJobInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PayRunJobInstruction" })
  payRunJobInstruction?: PayRunJobInstructionPayRunJobInstruction;
}
