import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// BatchJobInstructionBatchJobInstructionDelete
/** 
 * The batch job instructions' instructions
**/
export class BatchJobInstructionBatchJobInstructionDelete extends SpeakeasyBase {
  @Metadata({ data: "json, name=DELETE" })
  delete?: any[];
}


export class BatchJobInstructionBatchJobInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @Metadata({ data: "json, name=Instructions" })
  instructions?: BatchJobInstructionBatchJobInstructionDelete;

  @Metadata({ data: "json, name=ValidateOnly" })
  validateOnly?: boolean;
}


export class BatchJobInstruction extends SpeakeasyBase {
  @Metadata({ data: "json, name=BatchJobInstruction" })
  batchJobInstruction?: BatchJobInstructionBatchJobInstruction;
}
