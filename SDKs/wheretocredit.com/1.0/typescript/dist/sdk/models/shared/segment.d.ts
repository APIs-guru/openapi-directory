import { SpeakeasyBase } from "../../../internal/utils";
export declare class Segment extends SpeakeasyBase {
    bookingClass: string;
    carrier: string;
    departure?: Date;
    destination: string;
    distance?: number;
    flightNumber?: number;
    operatingCarrier?: string;
    origin: string;
}
