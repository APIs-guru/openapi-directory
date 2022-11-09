import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// PricingV2TrunkingNumberOriginatingCallPrice
/** 
 * The OriginatingCallPrice record
**/
export class PricingV2TrunkingNumberOriginatingCallPrice extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @Metadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV2TrunkingNumberTerminatingPrefixPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @Metadata({ data: "json, name=destination_prefixes" })
  destinationPrefixes?: string[];

  @Metadata({ data: "json, name=friendly_name" })
  friendlyName?: string;

  @Metadata({ data: "json, name=origination_prefixes" })
  originationPrefixes?: string[];
}


export class PricingV2TrunkingNumber extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=destination_number" })
  destinationNumber?: string;

  @Metadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @Metadata({ data: "json, name=originating_call_price" })
  originatingCallPrice?: PricingV2TrunkingNumberOriginatingCallPrice;

  @Metadata({ data: "json, name=origination_number" })
  originationNumber?: string;

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=terminating_prefix_prices", elemType: shared.PricingV2TrunkingNumberTerminatingPrefixPrices })
  terminatingPrefixPrices?: PricingV2TrunkingNumberTerminatingPrefixPrices[];

  @Metadata({ data: "json, name=url" })
  url?: string;
}
