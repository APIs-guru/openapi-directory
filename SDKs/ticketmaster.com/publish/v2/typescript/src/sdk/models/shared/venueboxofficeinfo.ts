import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VenueBoxOfficeInfo
/** 
 * Venue box office information
**/
export class VenueBoxOfficeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceptedPaymentDetails" })
  acceptedPaymentDetails?: Map<string, string>;

  @Metadata({ data: "json, name=openHoursDetails" })
  openHoursDetails?: Map<string, string>;

  @Metadata({ data: "json, name=phoneNumberDetails" })
  phoneNumberDetails?: Map<string, string>;

  @Metadata({ data: "json, name=willCallDetails" })
  willCallDetails?: Map<string, string>;
}
