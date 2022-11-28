import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VerificationAttemptEnumChannelsEnum } from "./verificationattemptenumchannelsenum";
import { VerificationAttemptEnumConversionStatusEnum } from "./verificationattemptenumconversionstatusenum";



export class VerifyV2VerificationAttempt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=channel" })
  channel?: VerificationAttemptEnumChannelsEnum;

  @SpeakeasyMetadata({ data: "json, name=channel_data" })
  channelData?: any;

  @SpeakeasyMetadata({ data: "json, name=conversion_status" })
  conversionStatus?: VerificationAttemptEnumConversionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: any;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=verification_sid" })
  verificationSid?: string;
}
