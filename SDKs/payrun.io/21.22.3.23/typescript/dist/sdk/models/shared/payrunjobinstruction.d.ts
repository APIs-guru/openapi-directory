import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The pay run job instructions' employees
**/
export declare class PayRunJobInstructionPayRunJobInstructionEmployee extends SpeakeasyBase {
    employee?: any[];
}
/**
 * The pay run job instructions' pay schedule
**/
export declare class PayRunJobInstructionPayRunJobInstructionPaySchedule extends SpeakeasyBase {
    atHref?: string;
    atRel?: string;
    atTitle?: string;
}
export declare class PayRunJobInstructionPayRunJobInstruction extends SpeakeasyBase {
    employees?: PayRunJobInstructionPayRunJobInstructionEmployee;
    endDate?: Date;
    holdingDate?: Date;
    isSupplementary?: boolean;
    paySchedule?: PayRunJobInstructionPayRunJobInstructionPaySchedule;
    paymentDate?: Date;
    startDate?: Date;
}
export declare class PayRunJobInstruction extends SpeakeasyBase {
    payRunJobInstruction?: PayRunJobInstructionPayRunJobInstruction;
}
