import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Leg } from "./leg";
export declare class Bet extends SpeakeasyBase {
    delayedBetId?: string;
    freeBetId?: string;
    legs: Leg[];
    number: number;
    stake: number;
    typeCode: string;
}
