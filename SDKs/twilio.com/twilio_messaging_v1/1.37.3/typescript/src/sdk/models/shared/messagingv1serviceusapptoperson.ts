import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MessagingV1ServiceUsAppToPerson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=brand_registration_sid" })
  brandRegistrationSid?: string;

  @SpeakeasyMetadata({ data: "json, name=campaign_id" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaign_status" })
  campaignStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=has_embedded_links" })
  hasEmbeddedLinks?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_embedded_phone" })
  hasEmbeddedPhone?: boolean;

  @SpeakeasyMetadata({ data: "json, name=help_keywords" })
  helpKeywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=help_message" })
  helpMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=is_externally_registered" })
  isExternallyRegistered?: boolean;

  @SpeakeasyMetadata({ data: "json, name=message_flow" })
  messageFlow?: string;

  @SpeakeasyMetadata({ data: "json, name=message_samples" })
  messageSamples?: string[];

  @SpeakeasyMetadata({ data: "json, name=messaging_service_sid" })
  messagingServiceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=mock" })
  mock?: boolean;

  @SpeakeasyMetadata({ data: "json, name=opt_in_keywords" })
  optInKeywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=opt_in_message" })
  optInMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=opt_out_keywords" })
  optOutKeywords?: string[];

  @SpeakeasyMetadata({ data: "json, name=opt_out_message" })
  optOutMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=rate_limits" })
  rateLimits?: any;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=us_app_to_person_usecase" })
  usAppToPersonUsecase?: string;
}
