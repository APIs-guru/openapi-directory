import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AddressWithTimeZone extends SpeakeasyBase {
  @Metadata({ data: "json, name=address_1" })
  address1?: string;

  @Metadata({ data: "json, name=address_2" })
  address2?: string;

  @Metadata({ data: "json, name=city" })
  city?: string;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=postal_code" })
  postalCode?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=time_zone" })
  timeZone?: string;
}
