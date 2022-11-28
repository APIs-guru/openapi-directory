import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VenueBoxOfficeInfo
/** 
 * Venue box office information
**/
export class VenueBoxOfficeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceptedPaymentDetails" })
  acceptedPaymentDetails?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=openHoursDetails" })
  openHoursDetails?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=phoneNumberDetails" })
  phoneNumberDetails?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=willCallDetails" })
  willCallDetails?: Map<string, string>;
}
