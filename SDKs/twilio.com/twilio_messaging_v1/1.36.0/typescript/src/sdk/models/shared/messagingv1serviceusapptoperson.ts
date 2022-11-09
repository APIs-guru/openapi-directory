import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MessagingV1ServiceUsAppToPerson extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=brand_registration_sid" })
  brandRegistrationSid?: string;

  @Metadata({ data: "json, name=campaign_id" })
  campaignId?: string;

  @Metadata({ data: "json, name=campaign_status" })
  campaignStatus?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=has_embedded_links" })
  hasEmbeddedLinks?: boolean;

  @Metadata({ data: "json, name=has_embedded_phone" })
  hasEmbeddedPhone?: boolean;

  @Metadata({ data: "json, name=is_externally_registered" })
  isExternallyRegistered?: boolean;

  @Metadata({ data: "json, name=message_samples" })
  messageSamples?: string[];

  @Metadata({ data: "json, name=messaging_service_sid" })
  messagingServiceSid?: string;

  @Metadata({ data: "json, name=mock" })
  mock?: boolean;

  @Metadata({ data: "json, name=rate_limits" })
  rateLimits?: any;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=us_app_to_person_usecase" })
  usAppToPersonUsecase?: string;
}
