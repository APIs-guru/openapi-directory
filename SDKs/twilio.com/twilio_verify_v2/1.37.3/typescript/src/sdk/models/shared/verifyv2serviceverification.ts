import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationEnumChannelEnum } from "./verificationenumchannelenum";



export class VerifyV2ServiceVerification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: VerificationEnumChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=lookup" })
  lookup?: any;

  @SpeakeasyMetadata({ data: "json, name=payee" })
  payee?: string;

  @SpeakeasyMetadata({ data: "json, name=send_code_attempts" })
  sendCodeAttempts?: any[];

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sna" })
  sna?: any;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid?: boolean;
}
