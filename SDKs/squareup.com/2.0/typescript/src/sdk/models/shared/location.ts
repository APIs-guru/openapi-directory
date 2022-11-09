import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Address } from "./address";
import { BusinessHours } from "./businesshours";
import { Coordinates } from "./coordinates";
import { TaxIds } from "./taxids";


export class Location extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: Address;

  @Metadata({ data: "json, name=business_email" })
  businessEmail?: string;

  @Metadata({ data: "json, name=business_hours" })
  businessHours?: BusinessHours;

  @Metadata({ data: "json, name=business_name" })
  businessName?: string;

  @Metadata({ data: "json, name=capabilities" })
  capabilities?: string[];

  @Metadata({ data: "json, name=coordinates" })
  coordinates?: Coordinates;

  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=facebook_url" })
  facebookUrl?: string;

  @Metadata({ data: "json, name=full_format_logo_url" })
  fullFormatLogoUrl?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=instagram_username" })
  instagramUsername?: string;

  @Metadata({ data: "json, name=language_code" })
  languageCode?: string;

  @Metadata({ data: "json, name=logo_url" })
  logoUrl?: string;

  @Metadata({ data: "json, name=mcc" })
  mcc?: string;

  @Metadata({ data: "json, name=merchant_id" })
  merchantId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=pos_background_url" })
  posBackgroundUrl?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=tax_ids" })
  taxIds?: TaxIds;

  @Metadata({ data: "json, name=timezone" })
  timezone?: string;

  @Metadata({ data: "json, name=twitter_username" })
  twitterUsername?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=website_url" })
  websiteUrl?: string;
}
