import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PriceFormatted } from "./priceformatted";
export declare class PlacedBetPart extends SpeakeasyBase {
    description: string;
    eachWayDen?: number;
    eachWayNum?: number;
    eachWayPlaces?: number;
    eventDescription: string;
    eventId: string;
    eventMarketDescription?: string;
    eventTypeDescription?: string;
    handicap?: number;
    number: number;
    priceDen: number;
    priceFormatted?: PriceFormatted;
    priceNum: number;
    priceType: string;
    result: string;
    rule4Deductions?: number;
    selectionId?: string;
    startDateTime: string;
}
