import { SpeakeasyBase } from "../../../internal/utils";
export declare class SingleBetRequestBody extends SpeakeasyBase {
    delayedBetId?: string;
    freeBetId?: string;
    priceDen?: number;
    priceNum?: number;
    priceType: string;
    selectionId: string;
    stake: number;
    type: string;
}
