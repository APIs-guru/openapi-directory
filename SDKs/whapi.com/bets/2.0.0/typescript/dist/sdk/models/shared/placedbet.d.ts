import { SpeakeasyBase } from "../../../internal/utils";
import { PlacedBetLeg } from "./placedbetleg";
export declare class PlacedBet extends SpeakeasyBase {
    cashinValue?: number;
    estimatedReturns: number;
    freeBetValue?: number;
    id: string;
    legs?: PlacedBetLeg[];
    numLines?: number;
    numSelections?: number;
    receipt?: string;
    settled: boolean;
    stake: number;
    stakePerLine?: number;
    status: string;
    transDateTime: string;
    typeCode: string;
    typeName: string;
    winnings: number;
}
