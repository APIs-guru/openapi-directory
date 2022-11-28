import { SpeakeasyBase } from "../../../internal/utils";
export declare enum OnDemandPromotionAccessTypeEnum {
    Default = "default",
    Vip = "vip"
}
export declare enum OnDemandPromotionDiscountTypeEnum {
    Dollars = "dollars",
    Free = "free",
    Percent = "percent"
}
/**
 * Information about the codes associated with this promotion.
**/
export declare class OnDemandPromotionMetadataConnectionsCodes extends SpeakeasyBase {
    options: string[];
    total: number;
    uri: string;
}
/**
 * A list of resource URIs related to the On Demand promotion.
**/
export declare class OnDemandPromotionMetadataConnections extends SpeakeasyBase {
    codes: OnDemandPromotionMetadataConnectionsCodes;
}
/**
 * The video's metadata.
**/
export declare class OnDemandPromotionMetadata extends SpeakeasyBase {
    connections: OnDemandPromotionMetadataConnections;
}
export declare enum OnDemandPromotionProductTypeEnum {
    Any = "any",
    Buy = "buy",
    BuyEpisode = "buy_episode",
    Rent = "rent",
    RentEpisode = "rent_episode",
    Subscribe = "subscribe"
}
export declare enum OnDemandPromotionStreamPeriodEnum {
    OneWeek = "1_week",
    OneYear = "1_year",
    TwentyFourHour = "24_hour",
    ThirtyDays = "30_days",
    ThreeMonth = "3_month",
    FortyEightHour = "48_hour",
    SixMonth = "6_month",
    SeventyTwoHour = "72_hour"
}
export declare enum OnDemandPromotionTypeEnum {
    Batch = "batch",
    BatchPrefix = "batch_prefix",
    Single = "single"
}
export declare class OnDemandPromotion extends SpeakeasyBase {
    accessType: OnDemandPromotionAccessTypeEnum;
    discountType: OnDemandPromotionDiscountTypeEnum;
    download: boolean;
    label: string;
    metadata: OnDemandPromotionMetadata;
    percentOff: number;
    productType: OnDemandPromotionProductTypeEnum;
    streamPeriod: OnDemandPromotionStreamPeriodEnum;
    total: number;
    type: OnDemandPromotionTypeEnum;
    uri: string;
}
