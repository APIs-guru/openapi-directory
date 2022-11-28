import { SpeakeasyBase } from "../../../internal/utils";
import { Segment } from "./segment";
export declare class Itinerary extends SpeakeasyBase {
    baseFareUsd?: number;
    id?: string;
    segments: Segment[];
    ticketingCarrier?: string;
}
