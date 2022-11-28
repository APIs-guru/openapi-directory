import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VerifyV2Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=code_length" })
  codeLength?: number;

  @SpeakeasyMetadata({ data: "json, name=custom_code_enabled" })
  customCodeEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=default_template_sid" })
  defaultTemplateSid?: string;

  @SpeakeasyMetadata({ data: "json, name=do_not_share_warning_enabled" })
  doNotShareWarningEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=dtmf_input_required" })
  dtmfInputRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=lookup_enabled" })
  lookupEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=psd2_enabled" })
  psd2Enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=push" })
  push?: any;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=skip_sms_to_landlines" })
  skipSmsToLandlines?: boolean;

  @SpeakeasyMetadata({ data: "json, name=totp" })
  totp?: any;

  @SpeakeasyMetadata({ data: "json, name=tts_name" })
  ttsName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
