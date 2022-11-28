import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LookupsV1PhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add_ons" })
  addOns?: any;

  @SpeakeasyMetadata({ data: "json, name=caller_name" })
  callerName?: any;

  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: any;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=national_format" })
  nationalFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
