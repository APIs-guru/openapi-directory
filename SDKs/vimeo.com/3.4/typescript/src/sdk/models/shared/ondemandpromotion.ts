import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum OnDemandPromotionAccessTypeEnum {
    Default = "default",
    Vip = "vip"
}

export enum OnDemandPromotionDiscountTypeEnum {
    Dollars = "dollars",
    Free = "free",
    Percent = "percent"
}


// OnDemandPromotionMetadataConnectionsCodes
/** 
 * Information about the codes associated with this promotion.
**/
export class OnDemandPromotionMetadataConnectionsCodes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=options" })
  options: string[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPromotionMetadataConnections
/** 
 * A list of resource URIs related to the On Demand promotion.
**/
export class OnDemandPromotionMetadataConnections extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=codes" })
  codes: OnDemandPromotionMetadataConnectionsCodes;
}


// OnDemandPromotionMetadata
/** 
 * The video's metadata.
**/
export class OnDemandPromotionMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connections" })
  connections: OnDemandPromotionMetadataConnections;
}

export enum OnDemandPromotionProductTypeEnum {
    Any = "any",
    Buy = "buy",
    BuyEpisode = "buy_episode",
    Rent = "rent",
    RentEpisode = "rent_episode",
    Subscribe = "subscribe"
}

export enum OnDemandPromotionStreamPeriodEnum {
    OneWeek = "1_week",
    OneYear = "1_year",
    TwentyFourHour = "24_hour",
    ThirtyDays = "30_days",
    ThreeMonth = "3_month",
    FortyEightHour = "48_hour",
    SixMonth = "6_month",
    SeventyTwoHour = "72_hour"
}

export enum OnDemandPromotionTypeEnum {
    Batch = "batch",
    BatchPrefix = "batch_prefix",
    Single = "single"
}


export class OnDemandPromotion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_type" })
  accessType: OnDemandPromotionAccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=discount_type" })
  discountType: OnDemandPromotionDiscountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata: OnDemandPromotionMetadata;

  @SpeakeasyMetadata({ data: "json, name=percent_off" })
  percentOff: number;

  @SpeakeasyMetadata({ data: "json, name=product_type" })
  productType: OnDemandPromotionProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=stream_period" })
  streamPeriod: OnDemandPromotionStreamPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: OnDemandPromotionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;
}
