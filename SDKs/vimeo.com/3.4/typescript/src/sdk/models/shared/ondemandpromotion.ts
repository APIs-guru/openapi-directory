import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OnDemandPromotionAccessTypeEnum {
    Default = "default"
,    Vip = "vip"
}

export enum OnDemandPromotionDiscountTypeEnum {
    Dollars = "dollars"
,    Free = "free"
,    Percent = "percent"
}


// OnDemandPromotionMetadataConnectionsCodes
/** 
 * Information about the codes associated with this promotion.
**/
export class OnDemandPromotionMetadataConnectionsCodes extends SpeakeasyBase {
  @Metadata({ data: "json, name=options" })
  options: string[];

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}


// OnDemandPromotionMetadataConnections
/** 
 * A list of resource URIs related to the On Demand promotion.
**/
export class OnDemandPromotionMetadataConnections extends SpeakeasyBase {
  @Metadata({ data: "json, name=codes" })
  codes: OnDemandPromotionMetadataConnectionsCodes;
}


// OnDemandPromotionMetadata
/** 
 * The video's metadata.
**/
export class OnDemandPromotionMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=connections" })
  connections: OnDemandPromotionMetadataConnections;
}

export enum OnDemandPromotionProductTypeEnum {
    Any = "any"
,    Buy = "buy"
,    BuyEpisode = "buy_episode"
,    Rent = "rent"
,    RentEpisode = "rent_episode"
,    Subscribe = "subscribe"
}

export enum OnDemandPromotionStreamPeriodEnum {
    OneWeek = "1_week"
,    OneYear = "1_year"
,    TwentyFourHour = "24_hour"
,    ThirtyDays = "30_days"
,    ThreeMonth = "3_month"
,    FortyEightHour = "48_hour"
,    SixMonth = "6_month"
,    SeventyTwoHour = "72_hour"
}

export enum OnDemandPromotionTypeEnum {
    Batch = "batch"
,    BatchPrefix = "batch_prefix"
,    Single = "single"
}


export class OnDemandPromotion extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_type" })
  accessType: OnDemandPromotionAccessTypeEnum;

  @Metadata({ data: "json, name=discount_type" })
  discountType: OnDemandPromotionDiscountTypeEnum;

  @Metadata({ data: "json, name=download" })
  download: boolean;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=metadata" })
  metadata: OnDemandPromotionMetadata;

  @Metadata({ data: "json, name=percent_off" })
  percentOff: number;

  @Metadata({ data: "json, name=product_type" })
  productType: OnDemandPromotionProductTypeEnum;

  @Metadata({ data: "json, name=stream_period" })
  streamPeriod: OnDemandPromotionStreamPeriodEnum;

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=type" })
  type: OnDemandPromotionTypeEnum;

  @Metadata({ data: "json, name=uri" })
  uri: string;
}
