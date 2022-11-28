import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HostedNumberOrderEnumStatusEnum } from "./hostednumberorderenumstatusenum";
import { HostedNumberOrderEnumVerificationTypeEnum } from "./hostednumberorderenumverificationtypeenum";



// PreviewHostedNumbersHostedNumberOrderCapabilities
/** 
 * A mapping of phone number capabilities.
**/
export class PreviewHostedNumbersHostedNumberOrderCapabilities extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fax" })
  fax?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mms" })
  mms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sms" })
  sms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=voice" })
  voice?: boolean;
}


export class PreviewHostedNumbersHostedNumberOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=address_sid" })
  addressSid?: string;

  @SpeakeasyMetadata({ data: "json, name=call_delay" })
  callDelay?: number;

  @SpeakeasyMetadata({ data: "json, name=capabilities" })
  capabilities?: PreviewHostedNumbersHostedNumberOrderCapabilities;

  @SpeakeasyMetadata({ data: "json, name=cc_emails" })
  ccEmails?: string[];

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=failure_reason" })
  failureReason?: string;

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=incoming_phone_number_sid" })
  incomingPhoneNumberSid?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=signing_document_sid" })
  signingDocumentSid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: HostedNumberOrderEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=verification_attempts" })
  verificationAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=verification_call_sids" })
  verificationCallSids?: string[];

  @SpeakeasyMetadata({ data: "json, name=verification_code" })
  verificationCode?: string;

  @SpeakeasyMetadata({ data: "json, name=verification_document_sid" })
  verificationDocumentSid?: string;

  @SpeakeasyMetadata({ data: "json, name=verification_type" })
  verificationType?: HostedNumberOrderEnumVerificationTypeEnum;
}
