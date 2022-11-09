import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PayRunJobInstructionPayRunJobInstructionEmployee
/** 
 * The pay run job instructions' employees
**/
export class PayRunJobInstructionPayRunJobInstructionEmployee extends SpeakeasyBase {
  @Metadata({ data: "json, name=Employee" })
  employee?: any[];
}


// PayRunJobInstructionPayRunJobInstructionPaySchedule
/** 
 * The pay run job instructions' pay schedule
**/
export class PayRunJobInstructionPayRunJobInstructionPaySchedule extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


export class PayRunJobInstructionPayRunJobInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Employees" })
  employees?: PayRunJobInstructionPayRunJobInstructionEmployee;

  @Metadata({ data: "json, name=EndDate" })
  endDate?: Date;

  @Metadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @Metadata({ data: "json, name=IsSupplementary" })
  isSupplementary?: boolean;

  @Metadata({ data: "json, name=PaySchedule" })
  paySchedule?: PayRunJobInstructionPayRunJobInstructionPaySchedule;

  @Metadata({ data: "json, name=PaymentDate" })
  paymentDate?: Date;

  @Metadata({ data: "json, name=StartDate" })
  startDate?: Date;
}


export class PayRunJobInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=PayRunJobInstruction" })
  payRunJobInstruction?: PayRunJobInstructionPayRunJobInstruction;
}
