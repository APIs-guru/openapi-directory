import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// BatchJobInstructionBatchJobInstructionDelete
/** 
 * The batch job instructions' instructions
**/
export class BatchJobInstructionBatchJobInstructionDelete extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DELETE" })
  delete?: any[];
}


export class BatchJobInstructionBatchJobInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=HoldingDate" })
  holdingDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=Instructions" })
  instructions?: BatchJobInstructionBatchJobInstructionDelete;

  @SpeakeasyMetadata({ data: "json, name=ValidateOnly" })
  validateOnly?: boolean;
}


export class BatchJobInstruction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=BatchJobInstruction" })
  batchJobInstruction?: BatchJobInstructionBatchJobInstruction;
}
