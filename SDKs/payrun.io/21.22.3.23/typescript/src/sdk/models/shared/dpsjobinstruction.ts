import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DpsJobInstructionDpsJobInstructionEmployer
/** 
 * The dps job instructions' employer
**/
export class DpsJobInstructionDpsJobInstructionEmployer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@rel" })
  atRel?: string;

  @SpeakeasyMetadata({ data: "json, name=@title" })
  atTitle?: string;
}


// DpsJobInstructionDpsJobInstructionType
/** 
 * The dps job instructions' message types
**/
export class DpsJobInstructionDpsJobInstructionType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: any[];
}


// DpsJobInstructionDpsJobInstructionMessage
/** 
 * The dps job instructions' messages to process
**/
export class DpsJobInstructionDpsJobInstructionMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Message" })
  message?: any[];
}


export class DpsJobInstructionDpsJobInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Apply" })
  apply?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Employer" })
  employer?: DpsJobInstructionDpsJobInstructionEmployer;

  @SpeakeasyMetadata({ data: "json, name=FromDate" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=MessageTypes" })
  messageTypes?: DpsJobInstructionDpsJobInstructionType;

  @SpeakeasyMetadata({ data: "json, name=MessagesToProcess" })
  messagesToProcess?: DpsJobInstructionDpsJobInstructionMessage;

  @SpeakeasyMetadata({ data: "json, name=Retrieve" })
  retrieve?: boolean;
}


export class DpsJobInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DpsJobInstruction" })
  dpsJobInstruction?: DpsJobInstructionDpsJobInstruction;
}
