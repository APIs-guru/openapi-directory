import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PricingV1MessagingMessagingCountryInstanceInboundSmsPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=base_price" })
  basePrice?: number;

  @SpeakeasyMetadata({ data: "json, name=current_price" })
  currentPrice?: number;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;
}


export class PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=carrier" })
  carrier?: string;

  @SpeakeasyMetadata({ data: "json, name=mcc" })
  mcc?: string;

  @SpeakeasyMetadata({ data: "json, name=mnc" })
  mnc?: string;

  @SpeakeasyMetadata({ data: "json, name=prices", elemType: PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices })
  prices?: PricingV1MessagingMessagingCountryInstanceOutboundSmsPricesPrices[];
}


export class PricingV1MessagingMessagingCountryInstance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=inbound_sms_prices", elemType: PricingV1MessagingMessagingCountryInstanceInboundSmsPrices })
  inboundSmsPrices?: PricingV1MessagingMessagingCountryInstanceInboundSmsPrices[];

  @SpeakeasyMetadata({ data: "json, name=iso_country" })
  isoCountry?: string;

  @SpeakeasyMetadata({ data: "json, name=outbound_sms_prices", elemType: PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices })
  outboundSmsPrices?: PricingV1MessagingMessagingCountryInstanceOutboundSmsPrices[];

  @SpeakeasyMetadata({ data: "json, name=price_unit" })
  priceUnit?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
