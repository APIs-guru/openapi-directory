import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PhoneNumberEnumValidationErrorEnum } from "./phonenumberenumvalidationerrorenum";



export class LookupsV2PhoneNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_forwarding" })
  callForwarding?: any;

  @SpeakeasyMetadata({ data: "json, name=caller_name" })
  callerName?: any;

  @SpeakeasyMetadata({ data: "json, name=calling_country_code" })
  callingCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=line_type_intelligence" })
  lineTypeIntelligence?: any;

  @SpeakeasyMetadata({ data: "json, name=live_activity" })
  liveActivity?: any;

  @SpeakeasyMetadata({ data: "json, name=national_format" })
  nationalFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sim_swap" })
  simSwap?: any;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid?: boolean;

  @SpeakeasyMetadata({ data: "json, name=validation_errors" })
  validationErrors?: PhoneNumberEnumValidationErrorEnum[];
}
