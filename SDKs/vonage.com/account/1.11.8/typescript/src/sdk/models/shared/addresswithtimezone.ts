import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AddressWithTimeZone extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address_1" })
  address1?: string;

  @SpeakeasyMetadata({ data: "json, name=address_2" })
  address2?: string;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=time_zone" })
  timeZone?: string;
}
