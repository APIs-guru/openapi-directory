import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VerificationEnumChannelEnum } from "./verificationenumchannelenum";


export class VerifyV2ServiceVerification extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=amount" })
  amount?: string;

  @Metadata({ data: "json, name=channel" })
  channel?: VerificationEnumChannelEnum;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=lookup" })
  lookup?: any;

  @Metadata({ data: "json, name=payee" })
  payee?: string;

  @Metadata({ data: "json, name=send_code_attempts" })
  sendCodeAttempts?: any[];

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=sna" })
  sna?: any;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=to" })
  to?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=valid" })
  valid?: boolean;
}
