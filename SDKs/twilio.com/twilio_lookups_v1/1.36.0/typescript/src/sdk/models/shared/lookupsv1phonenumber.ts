import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LookupsV1PhoneNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=add_ons" })
  addOns?: any;

  @Metadata({ data: "json, name=caller_name" })
  callerName?: any;

  @Metadata({ data: "json, name=carrier" })
  carrier?: any;

  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=national_format" })
  nationalFormat?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
