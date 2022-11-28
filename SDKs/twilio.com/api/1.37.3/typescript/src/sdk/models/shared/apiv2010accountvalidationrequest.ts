import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApiV2010AccountValidationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=call_sid" })
  callSid?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=validation_code" })
  validationCode?: string;
}
