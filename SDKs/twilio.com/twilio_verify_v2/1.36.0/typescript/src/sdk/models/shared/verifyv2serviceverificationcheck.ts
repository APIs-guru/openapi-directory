import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VerificationCheckEnumChannelEnum } from "./verificationcheckenumchannelenum";


export class VerifyV2ServiceVerificationCheck extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=channel" })
  channel?: VerificationCheckEnumChannelEnum;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=payee" })
  payee?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sna_attempts_error_codes" })
  snaAttemptsErrorCodes?: any[];

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=valid" })
  valid?: boolean;
}
