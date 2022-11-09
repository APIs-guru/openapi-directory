import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PricingV1MessagingMessagingCountryInstanceInboundSmsPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @Metadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=base_price" })
  basePrice?: number;

  @Metadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @Metadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices extends SpeakeasyBase {
  @Metadata({ data: "json, name=carrier" })
  carrier?: string;

  @Metadata({ data: "json, name=mcc" })
  mcc?: string;

  @Metadata({ data: "json, name=mnc" })
  mnc?: string;

  @Metadata({ data: "json, name=prices", elemType: shared.PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices })
  prices?: PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices[];
}


export class PricingV1MessagingMessagingCountryInstance extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=inbound_sms_prices", elemType: shared.PricingV1MessagingMessagingCountryInstanceInboundSmsPrices })
  inboundSmsPrices?: PricingV1MessagingMessagingCountryInstanceInboundSmsPrices[];

  @Metadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @Metadata({ data: "json, name=outbound_sms_prices", elemType: shared.PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices })
  outboundSmsPrices?: PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices[];

  @Metadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
