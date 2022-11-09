import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TollfreeVerificationEnumOptInTypeEnum } from "./tollfreeverificationenumoptintypeenum";
import { TollfreeVerificationEnumStatusEnum } from "./tollfreeverificationenumstatusenum";


export class MessagingV1TollfreeVerification extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=additional_information" })
  additionalInformation?: string;

  @Metadata({ data: "json, name=business_city" })
  businessCity?: string;

  @Metadata({ data: "json, name=business_contact_email" })
  businessContactEmail?: string;

  @Metadata({ data: "json, name=business_contact_first_name" })
  businessContactFirstName?: string;

  @Metadata({ data: "json, name=business_contact_last_name" })
  businessContactLastName?: string;

  @Metadata({ data: "json, name=business_contact_phone" })
  businessContactPhone?: string;

  @Metadata({ data: "json, name=business_country" })
  businessCountry?: string;

  @Metadata({ data: "json, name=business_name" })
  businessName?: string;

  @Metadata({ data: "json, name=business_postal_code" })
  businessPostalCode?: string;

  @Metadata({ data: "json, name=business_state_province_region" })
  businessStateProvinceRegion?: string;

  @Metadata({ data: "json, name=business_street_address" })
  businessStreetAddress?: string;

  @Metadata({ data: "json, name=business_street_address2" })
  businessStreetAddress2?: string;

  @Metadata({ data: "json, name=business_website" })
  businessWebsite?: string;

  @Metadata({ data: "json, name=customer_profile_sid" })
  customerProfileSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=message_volume" })
  messageVolume?: string;

  @Metadata({ data: "json, name=notification_email" })
  notificationEmail?: string;

  @Metadata({ data: "json, name=opt_in_image_urls" })
  optInImageUrls?: string[];

  @Metadata({ data: "json, name=opt_in_type" })
  optInType?: TollfreeVerificationEnumOptInTypeEnum;

  @Metadata({ data: "json, name=production_message_sample" })
  productionMessageSample?: string;

  @Metadata({ data: "json, name=regulated_item_sid" })
  regulatedItemSid?: string;

  @Metadata({ data: "json, name=resource_links" })
  resourceLinks?: any;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: TollfreeVerificationEnumStatusEnum;

  @Metadata({ data: "json, name=tollfree_phone_number_sid" })
  tollfreePhoneNumberSid?: string;

  @Metadata({ data: "json, name=trust_product_sid" })
  trustProductSid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=use_case_categories" })
  useCaseCategories?: string[];

  @Metadata({ data: "json, name=use_case_summary" })
  useCaseSummary?: string;
}
