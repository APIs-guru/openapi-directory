import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApiV2010AccountValidationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=call_sid" })
  callSid?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=validation_code" })
  validationCode?: string;
}
