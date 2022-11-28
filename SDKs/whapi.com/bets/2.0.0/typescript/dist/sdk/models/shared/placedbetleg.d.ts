import { SpeakeasyBase } from "../../../internal/utils";
import { PlacedBetPart } from "./placedbetpart";
export declare class PlacedBetLeg extends SpeakeasyBase {
    number: number;
    parts: PlacedBetPart[];
    sort?: string;
    type: string;
}
