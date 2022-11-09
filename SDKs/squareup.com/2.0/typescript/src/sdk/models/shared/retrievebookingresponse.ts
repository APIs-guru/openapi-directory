import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Booking } from "./booking";
import { Error } from "./error";


export class RetrieveBookingResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=booking" })
  booking?: Booking;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
