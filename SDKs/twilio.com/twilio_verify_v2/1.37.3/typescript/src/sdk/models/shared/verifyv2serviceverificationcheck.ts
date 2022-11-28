import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationCheckEnumChannelEnum } from "./verificationcheckenumchannelenum";



export class VerifyV2ServiceVerificationCheck extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: VerificationCheckEnumChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=payee" })
  payee?: string;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=sna_attempts_error_codes" })
  snaAttemptsErrorCodes?: any[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid?: boolean;
}
