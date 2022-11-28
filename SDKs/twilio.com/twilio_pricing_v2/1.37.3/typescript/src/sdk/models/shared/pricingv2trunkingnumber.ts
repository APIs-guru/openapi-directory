import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PricingV2TrunkingNumberOriginatingCallPrice
/** 
 * The OriginatingCallPrice record
**/
export class PricingV2TrunkingNumberOriginatingCallPrice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV2TrunkingNumberTerminatingPrefixPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=destination_prefixes" })
  destinationPrefixes?: string[];

  @SpeakeasyMetadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=origination_prefixes" })
  originationPrefixes?: string[];
}


export class PricingV2TrunkingNumber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=destination_number" })
  destinationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=originating_call_price" })
  originatingCallPrice?: PricingV2TrunkingNumberOriginatingCallPrice;

  @SpeakeasyMetadata({ data: "json, name=origination_number" })
  originationNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=terminating_prefix_prices", elemType: PricingV2TrunkingNumberTerminatingPrefixPrices })
  terminatingPrefixPrices?: PricingV2TrunkingNumberTerminatingPrefixPrices[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
