import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BrandVettingEnumVettingProviderEnum } from "./brandvettingenumvettingproviderenum";


export class MessagingV1BrandRegistrationsBrandVetting extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=brand_sid" })
  brandSid?: string;

  @Metadata({ data: "json, name=brand_vetting_sid" })
  brandVettingSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=vetting_class" })
  vettingClass?: string;

  @Metadata({ data: "json, name=vetting_id" })
  vettingId?: string;

  @Metadata({ data: "json, name=vetting_provider" })
  vettingProvider?: BrandVettingEnumVettingProviderEnum;

  @Metadata({ data: "json, name=vetting_status" })
  vettingStatus?: string;
}
