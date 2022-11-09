import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BusinessBookingProfile } from "./businessbookingprofile";
import { Error } from "./error";


export class RetrieveBusinessBookingProfileResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=business_booking_profile" })
  businessBookingProfile?: BusinessBookingProfile;

  @Metadata({ data: "json, name=errors", elemType: shared.Error })
  errors?: Error[];
}
