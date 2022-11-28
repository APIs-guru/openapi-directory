import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Segment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bookingClass" })
  bookingClass: string;

  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier: string;

  @SpeakeasyMetadata({ data: "json, name=departure" })
  departure?: Date;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination: string;

  @SpeakeasyMetadata({ data: "json, name=distance" })
  distance?: number;

  @SpeakeasyMetadata({ data: "json, name=flightNumber" })
  flightNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=operatingCarrier" })
  operatingCarrier?: string;

  @SpeakeasyMetadata({ data: "json, name=origin" })
  origin: string;
}
