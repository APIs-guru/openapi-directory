import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Booking } from "./booking";


export class UpdateBookingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=booking" })
  booking: Booking;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;
}
