import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BrandVettingEnumVettingProviderEnum } from "./brandvettingenumvettingproviderenum";



export class MessagingV1BrandRegistrationsBrandVetting extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=brand_sid" })
  brandSid?: string;

  @SpeakeasyMetadata({ data: "json, name=brand_vetting_sid" })
  brandVettingSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=vetting_class" })
  vettingClass?: string;

  @SpeakeasyMetadata({ data: "json, name=vetting_id" })
  vettingId?: string;

  @SpeakeasyMetadata({ data: "json, name=vetting_provider" })
  vettingProvider?: BrandVettingEnumVettingProviderEnum;

  @SpeakeasyMetadata({ data: "json, name=vetting_status" })
  vettingStatus?: string;
}
