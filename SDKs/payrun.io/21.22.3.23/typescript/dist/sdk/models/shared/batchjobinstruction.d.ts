import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The batch job instructions' instructions
**/
export declare class BatchJobInstructionBatchJobInstructionDelete extends SpeakeasyBase {
    delete?: any[];
}
export declare class BatchJobInstructionBatchJobInstruction extends SpeakeasyBase {
    holdingDate?: Date;
    instructions?: BatchJobInstructionBatchJobInstructionDelete;
    validateOnly?: boolean;
}
export declare class BatchJobInstruction extends SpeakeasyBase {
    batchJobInstruction?: BatchJobInstructionBatchJobInstruction;
}
