import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { VerificationAttemptEnumChannelsEnum } from "./verificationattemptenumchannelsenum";
import { VerificationAttemptEnumConversionStatusEnum } from "./verificationattemptenumconversionstatusenum";


export class VerifyV2VerificationAttempt extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=channel" })
  channel?: VerificationAttemptEnumChannelsEnum;

  @Metadata({ data: "json, name=channel_data" })
  channelData?: any;

  @Metadata({ data: "json, name=conversion_status" })
  conversionStatus?: VerificationAttemptEnumConversionStatusEnum;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=price" })
  price?: any;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=verification_sid" })
  verificationSid?: string;
}
