import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PayInstructionPayInstruction extends SpeakeasyBase {
    description?: string;
    endDate?: Date;
    payLineTag?: string;
    startDate?: Date;
}
export declare class PayInstruction extends SpeakeasyBase {
    payInstruction?: PayInstructionPayInstruction;
}
