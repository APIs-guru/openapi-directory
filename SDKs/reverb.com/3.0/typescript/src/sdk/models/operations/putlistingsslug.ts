import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutListingsSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class PutListingsSlugRequestBodyCategories extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}

export enum PutListingsSlugRequestBodyConditionUuidEnum {
    Fbf3566896a04baaBcdeAb18d6b1b329 = "fbf35668-96a0-4baa-bcde-ab18d6b1b329",
    Sixa9dfcad600b46c89e08Ce6e5057921e = "6a9dfcad-600b-46c8-9e08-ce6e5057921e",
    NinetyEightMillionSevenHundredAndSeventySevenThousandEightHundredAndEightySix76d044c8865eBb40e669e934 = "98777886-76d0-44c8-865e-bb40e669e934",
    F7a3f48c972a44c6B01a0cd27488d3f6 = "f7a3f48c-972a-44c6-b01a-0cd27488d3f6",
    Ae4d91141bd74ec5A4ba6653af5ac84d = "ae4d9114-1bd7-4ec5-a4ba-6653af5ac84d",
    Df268ad1C4624ba6B6dbE007e23922ea = "df268ad1-c462-4ba6-b6db-e007e23922ea",
    Ac5b9c1eDc78466dB0b37cf712967a48 = "ac5b9c1e-dc78-466d-b0b3-7cf712967a48",
    Sixdb7df88293b4017A1c1Cdb5e599fa1a = "6db7df88-293b-4017-a1c1-cdb5e599fa1a",
    NineMillionTwoHundredAndTwentyFiveThousandTwoHundredAndEightyThreef60c24413Ad181f5eba7a856f = "9225283f-60c2-4413-ad18-1f5eba7a856f",
    Sevenc3f45de2ae04c818400Fdb6b1d74890 = "7c3f45de-2ae0-4c81-8400-fdb6b1d74890"
}


// PutListingsSlugRequestBodyCondition
/** 
 * Condition
**/
export class PutListingsSlugRequestBodyCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: PutListingsSlugRequestBodyConditionUuidEnum;
}

export enum PutListingsSlugRequestBodyExclusiveChannelEnum {
    SellerSite = "seller_site",
    Reverb = "reverb",
    None = "none"
}


export class PutListingsSlugRequestBodyLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country_code" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=locality" })
  locality?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;
}

export enum PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum {
    Days = "days",
    Weeks = "weeks"
}


// PutListingsSlugRequestBodyPreorderInfo
/** 
 * Create or update a preorder listing. Requires opt-in. Please contact sales@reverb.com if you would like to activate this feature.
**/
export class PutListingsSlugRequestBodyPreorderInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lead_time" })
  leadTime?: number;

  @SpeakeasyMetadata({ data: "json, name=lead_time_unit" })
  leadTimeUnit: PutListingsSlugRequestBodyPreorderInfoLeadTimeUnitEnum;

  @SpeakeasyMetadata({ data: "json, name=ship_date" })
  shipDate?: string;
}

export enum PutListingsSlugRequestBodyPriceCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN"
}


export class PutListingsSlugRequestBodyPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: PutListingsSlugRequestBodyPriceCurrencyEnum;
}


export class PutListingsSlugRequestBodySeller extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=paypal_email" })
  paypalEmail?: string;
}

export enum PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum {
    Usd = "USD",
    Cad = "CAD",
    Eur = "EUR",
    Gbp = "GBP",
    Aud = "AUD",
    Jpy = "JPY",
    Nzd = "NZD",
    Mxn = "MXN"
}


export class PutListingsSlugRequestBodyShippingRatesRate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency: PutListingsSlugRequestBodyShippingRatesRateCurrencyEnum;
}


export class PutListingsSlugRequestBodyShippingRates extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: PutListingsSlugRequestBodyShippingRatesRate;

  @SpeakeasyMetadata({ data: "json, name=region_code" })
  regionCode?: string;
}


export class PutListingsSlugRequestBodyShipping extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=local" })
  local?: boolean;

  @SpeakeasyMetadata({ data: "json, name=rates", elemType: PutListingsSlugRequestBodyShippingRates })
  rates?: PutListingsSlugRequestBodyShippingRates[];
}


export class PutListingsSlugRequestBodyVideos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;
}


export class PutListingsSlugRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=categories", elemType: PutListingsSlugRequestBodyCategories })
  categories?: PutListingsSlugRequestBodyCategories[];

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: PutListingsSlugRequestBodyCondition;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=exclusive_channel" })
  exclusiveChannel?: PutListingsSlugRequestBodyExclusiveChannelEnum;

  @SpeakeasyMetadata({ data: "json, name=finish" })
  finish?: string;

  @SpeakeasyMetadata({ data: "json, name=has_inventory" })
  hasInventory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=inventory" })
  inventory?: number;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: PutListingsSlugRequestBodyLocation;

  @SpeakeasyMetadata({ data: "json, name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=multi_item" })
  multiItem?: boolean;

  @SpeakeasyMetadata({ data: "json, name=offers_enabled" })
  offersEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=origin_country_code" })
  originCountryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=photos" })
  photos?: string[];

  @SpeakeasyMetadata({ data: "json, name=preorder_info" })
  preorderInfo?: PutListingsSlugRequestBodyPreorderInfo;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: PutListingsSlugRequestBodyPrice;

  @SpeakeasyMetadata({ data: "json, name=prop_65_warning" })
  prop65Warning?: string;

  @SpeakeasyMetadata({ data: "json, name=publish" })
  publish?: boolean;

  @SpeakeasyMetadata({ data: "json, name=seller" })
  seller?: PutListingsSlugRequestBodySeller;

  @SpeakeasyMetadata({ data: "json, name=seller_cost" })
  sellerCost?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping" })
  shipping?: PutListingsSlugRequestBodyShipping;

  @SpeakeasyMetadata({ data: "json, name=shipping_profile_id" })
  shippingProfileId?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_profile_name" })
  shippingProfileName?: string;

  @SpeakeasyMetadata({ data: "json, name=sku" })
  sku?: string;

  @SpeakeasyMetadata({ data: "json, name=sold_as_is" })
  soldAsIs?: boolean;

  @SpeakeasyMetadata({ data: "json, name=storage_location" })
  storageLocation?: string;

  @SpeakeasyMetadata({ data: "json, name=tax_exempt" })
  taxExempt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=upc" })
  upc?: string;

  @SpeakeasyMetadata({ data: "json, name=upc_does_not_apply" })
  upcDoesNotApply?: boolean;

  @SpeakeasyMetadata({ data: "json, name=videos", elemType: PutListingsSlugRequestBodyVideos })
  videos?: PutListingsSlugRequestBodyVideos[];

  @SpeakeasyMetadata({ data: "json, name=year" })
  year?: string;
}


export class PutListingsSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PutListingsSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutListingsSlugPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PutListingsSlugRequestBody;

  @SpeakeasyMetadata()
  security: PutListingsSlugSecurity;
}


export class PutListingsSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
