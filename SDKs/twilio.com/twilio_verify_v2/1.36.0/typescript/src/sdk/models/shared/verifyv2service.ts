import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VerifyV2Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=code_length" })
  codeLength?: number;

  @Metadata({ data: "json, name=custom_code_enabled" })
  customCodeEnabled?: boolean;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=default_template_sid" })
  defaultTemplateSid?: string;

  @Metadata({ data: "json, name=do_not_share_warning_enabled" })
  doNotShareWarningEnabled?: boolean;

  @Metadata({ data: "json, name=dtmf_input_required" })
  dtmfInputRequired?: boolean;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=lookup_enabled" })
  lookupEnabled?: boolean;

  @Metadata({ data: "json, name=psd2_enabled" })
  psd2Enabled?: boolean;

  @Metadata({ data: "json, name=push" })
  push?: any;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=skip_sms_to_landlines" })
  skipSmsToLandlines?: boolean;

  @Metadata({ data: "json, name=totp" })
  totp?: any;

  @Metadata({ data: "json, name=tts_name" })
  ttsName?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
