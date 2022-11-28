import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The dps job instructions' employer
**/
export declare class DpsJobInstructionDpsJobInstructionEmployer extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
/**
 * The dps job instructions' message types
**/
export declare class DpsJobInstructionDpsJobInstructionType extends SpeakeasyBase {
    type?: any[];
}
/**
 * The dps job instructions' messages to process
**/
export declare class DpsJobInstructionDpsJobInstructionMessage extends SpeakeasyBase {
    message?: any[];
}
export declare class DpsJobInstructionDpsJobInstruction extends SpeakeasyBase {
    apply?: boolean;
    employer?: DpsJobInstructionDpsJobInstructionEmployer;
    fromDate?: Date;
    holdingDate?: Date;
    messageTypes?: DpsJobInstructionDpsJobInstructionType;
    messagesToProcess?: DpsJobInstructionDpsJobInstructionMessage;
    retrieve?: boolean;
}
export declare class DpsJobInstruction extends SpeakeasyBase {
    dpsJobInstruction?: DpsJobInstructionDpsJobInstruction;
}
