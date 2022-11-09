import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FreeBetDetail } from "./freebetdetail";
import { Betslipleg } from "./betslipleg";
export declare class Betslipbet extends SpeakeasyBase {
    betMultiplier?: number;
    freeBets?: FreeBetDetail[];
    legs: Betslipleg[];
    maxStake?: number;
    minStake?: number;
    numLines?: number;
    number: number;
    typeCode: string;
    typeName?: string;
}
