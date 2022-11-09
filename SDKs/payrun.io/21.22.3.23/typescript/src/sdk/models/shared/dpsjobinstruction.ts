import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DpsJobInstructionDpsJobInstructionEmployer
/** 
 * The dps job instructions' employer
**/
export class DpsJobInstructionDpsJobInstructionEmployer extends SpeakeasyBase {
  @Metadata({ data: "json, name=@href" })
  atHref?: string;

  @Metadata({ data: "json, name=@rel" })
  atRel?: string;

  @Metadata({ data: "json, name=@title" })
  atTitle?: string;
}


// DpsJobInstructionDpsJobInstructionType
/** 
 * The dps job instructions' message types
**/
export class DpsJobInstructionDpsJobInstructionType extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: any[];
}


// DpsJobInstructionDpsJobInstructionMessage
/** 
 * The dps job instructions' messages to process
**/
export class DpsJobInstructionDpsJobInstructionMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=Message" })
  message?: any[];
}


export class DpsJobInstructionDpsJobInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=Apply" })
  apply?: boolean;

  @Metadata({ data: "json, name=Employer" })
  employer?: DpsJobInstructionDpsJobInstructionEmployer;

  @Metadata({ data: "json, name=FromDate" })
  fromDate?: Date;

  @Metadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @Metadata({ data: "json, name=MessageTypes" })
  messageTypes?: DpsJobInstructionDpsJobInstructionType;

  @Metadata({ data: "json, name=MessagesToProcess" })
  messagesToProcess?: DpsJobInstructionDpsJobInstructionMessage;

  @Metadata({ data: "json, name=Retrieve" })
  retrieve?: boolean;
}


export class DpsJobInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=DpsJobInstruction" })
  dpsJobInstruction?: DpsJobInstructionDpsJobInstruction;
}
