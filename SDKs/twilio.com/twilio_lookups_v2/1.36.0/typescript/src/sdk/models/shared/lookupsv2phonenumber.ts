import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PhoneNumberEnumValidationErrorEnum } from "./phonenumberenumvalidationerrorenum";


export class LookupsV2PhoneNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=call_forwarding" })
  callForwarding?: any;

  @Metadata({ data: "json, name=caller_name" })
  callerName?: any;

  @Metadata({ data: "json, name=calling_country_code" })
  callingCountryCode?: string;

  @Metadata({ data: "json, name=country_code" })
  countryCode?: string;

  @Metadata({ data: "json, name=line_type_intelligence" })
  lineTypeIntelligence?: any;

  @Metadata({ data: "json, name=live_activity" })
  liveActivity?: any;

  @Metadata({ data: "json, name=national_format" })
  nationalFormat?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=sim_swap" })
  simSwap?: any;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=valid" })
  valid?: boolean;

  @Metadata({ data: "json, name=validation_errors" })
  validationErrors?: PhoneNumberEnumValidationErrorEnum[];
}
