import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CancelBookingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=booking_version" })
  bookingVersion?: number;

  @Metadata({ data: "json, name=idempotency_key" })
  idempotencyKey?: string;
}
