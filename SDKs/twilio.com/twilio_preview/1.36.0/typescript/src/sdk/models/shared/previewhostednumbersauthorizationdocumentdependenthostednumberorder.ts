import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DependentHostedNumberOrderEnumStatusEnum } from "./dependenthostednumberorderenumstatusenum";
import { DependentHostedNumberOrderEnumVerificationTypeEnum } from "./dependenthostednumberorderenumverificationtypeenum";


// PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities
/** 
 * A mapping of phone number capabilities.
**/
export class PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities extends SpeakeasyBase {
  @Metadata({ data: "json, name=fax" })
  fax?: boolean;

  @Metadata({ data: "json, name=mms" })
  mms?: boolean;

  @Metadata({ data: "json, name=sms" })
  sms?: boolean;

  @Metadata({ data: "json, name=voice" })
  voice?: boolean;
}


export class PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=address_sid" })
  addressSid?: string;

  @Metadata({ data: "json, name=call_delay" })
  callDelay?: number;

  @Metadata({ data: "json, name=capabilities" })
  capabilities?: PreviewHostedNumbersAuthorizationDocumentDependentHostedNumberOrderCapabilities;

  @Metadata({ data: "json, name=cc_emails" })
  ccEmails?: string[];

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=extension" })
  extension?: string;

  @Metadata({ data: "json, name=failure_reason" })
  failureReason?: string;

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=incoming_phone_number_sid" })
  incomingPhoneNumberSid?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=signing_document_sid" })
  signingDocumentSid?: string;

  @Metadata({ data: "json, name=status" })
  status?: DependentHostedNumberOrderEnumStatusEnum;

  @Metadata({ data: "json, name=unique_name" })
  uniqueName?: string;

  @Metadata({ data: "json, name=verification_attempts" })
  verificationAttempts?: number;

  @Metadata({ data: "json, name=verification_call_sids" })
  verificationCallSids?: string[];

  @Metadata({ data: "json, name=verification_code" })
  verificationCode?: string;

  @Metadata({ data: "json, name=verification_document_sid" })
  verificationDocumentSid?: string;

  @Metadata({ data: "json, name=verification_type" })
  verificationType?: DependentHostedNumberOrderEnumVerificationTypeEnum;
}
