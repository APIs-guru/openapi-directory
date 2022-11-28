import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TollfreeVerificationEnumOptInTypeEnum } from "./tollfreeverificationenumoptintypeenum";
import { TollfreeVerificationEnumStatusEnum } from "./tollfreeverificationenumstatusenum";



export class MessagingV1TollfreeVerification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=additional_information" })
  additionalInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=business_city" })
  businessCity?: string;

  @SpeakeasyMetadata({ data: "json, name=business_contact_email" })
  businessContactEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=business_contact_first_name" })
  businessContactFirstName?: string;

  @SpeakeasyMetadata({ data: "json, name=business_contact_last_name" })
  businessContactLastName?: string;

  @SpeakeasyMetadata({ data: "json, name=business_contact_phone" })
  businessContactPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=business_country" })
  businessCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=business_name" })
  businessName?: string;

  @SpeakeasyMetadata({ data: "json, name=business_postal_code" })
  businessPostalCode?: string;

  @SpeakeasyMetadata({ data: "json, name=business_state_province_region" })
  businessStateProvinceRegion?: string;

  @SpeakeasyMetadata({ data: "json, name=business_street_address" })
  businessStreetAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=business_street_address2" })
  businessStreetAddress2?: string;

  @SpeakeasyMetadata({ data: "json, name=business_website" })
  businessWebsite?: string;

  @SpeakeasyMetadata({ data: "json, name=customer_profile_sid" })
  customerProfileSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=message_volume" })
  messageVolume?: string;

  @SpeakeasyMetadata({ data: "json, name=notification_email" })
  notificationEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=opt_in_image_urls" })
  optInImageUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=opt_in_type" })
  optInType?: TollfreeVerificationEnumOptInTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=production_message_sample" })
  productionMessageSample?: string;

  @SpeakeasyMetadata({ data: "json, name=regulated_item_sid" })
  regulatedItemSid?: string;

  @SpeakeasyMetadata({ data: "json, name=resource_links" })
  resourceLinks?: any;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TollfreeVerificationEnumStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=tollfree_phone_number_sid" })
  tollfreePhoneNumberSid?: string;

  @SpeakeasyMetadata({ data: "json, name=trust_product_sid" })
  trustProductSid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=use_case_categories" })
  useCaseCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=use_case_summary" })
  useCaseSummary?: string;
}
