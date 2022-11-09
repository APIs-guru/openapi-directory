import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Segment extends SpeakeasyBase {
  @Metadata({ data: "json, name=bookingClass" })
  bookingClass: string;

  @Metadata({ data: "json, name=carrier" })
  carrier: string;

  @Metadata({ data: "json, name=departure" })
  departure?: Date;

  @Metadata({ data: "json, name=destination" })
  destination: string;

  @Metadata({ data: "json, name=distance" })
  distance?: number;

  @Metadata({ data: "json, name=flightNumber" })
  flightNumber?: number;

  @Metadata({ data: "json, name=operatingCarrier" })
  operatingCarrier?: string;

  @Metadata({ data: "json, name=origin" })
  origin: string;
}
