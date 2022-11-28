import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PricingV2TrunkingCountryInstanceOriginatingCallPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV2TrunkingCountryInstanceTerminatingPrefixPrices extends SpeakeasyBase {
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


export class PricingV2TrunkingCountryInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=originating_call_prices", elemType: PricingV2TrunkingCountryInstanceOriginatingCallPrices })
  originatingCallPrices?: PricingV2TrunkingCountryInstanceOriginatingCallPrices[];

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=terminating_prefix_prices", elemType: PricingV2TrunkingCountryInstanceTerminatingPrefixPrices })
  terminatingPrefixPrices?: PricingV2TrunkingCountryInstanceTerminatingPrefixPrices[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
