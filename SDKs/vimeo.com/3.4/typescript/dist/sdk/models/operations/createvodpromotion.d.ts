import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateVodPromotionPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare enum CreateVodPromotionRequestBodyAccessTypeEnum {
    Default = "default",
    Vip = "vip"
}
export declare enum CreateVodPromotionRequestBodyDiscountTypeEnum {
    Free = "free",
    Percent = "percent"
}
export declare enum CreateVodPromotionRequestBodyProductTypeEnum {
    Any = "any",
    Buy = "buy",
    BuyEpisode = "buy_episode",
    Rent = "rent",
    RentEpisode = "rent_episode",
    Subscribe = "subscribe"
}
export declare enum CreateVodPromotionRequestBodyStreamPeriodEnum {
    OneWeek = "1_week",
    OneYear = "1_year",
    TwentyFourHour = "24_hour",
    ThirtyDay = "30_day",
    ThreeMonth = "3_month",
    FortyEightHour = "48_hour",
    SixMonth = "6_month",
    SeventyTwoHour = "72_hour"
}
export declare enum CreateVodPromotionRequestBodyTypeEnum {
    Batch = "batch",
    Single = "single"
}
export declare class CreateVodPromotionRequestBody extends SpeakeasyBase {
    accessType?: CreateVodPromotionRequestBodyAccessTypeEnum;
    code?: string;
    discountType?: CreateVodPromotionRequestBodyDiscountTypeEnum;
    download: boolean;
    endTime?: string;
    label?: string;
    percentOff?: number;
    productType?: CreateVodPromotionRequestBodyProductTypeEnum;
    startTime?: string;
    streamPeriod: CreateVodPromotionRequestBodyStreamPeriodEnum;
    total: number;
    type: CreateVodPromotionRequestBodyTypeEnum;
}
export declare class CreateVodPromotionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class CreateVodPromotionRequest extends SpeakeasyBase {
    pathParams: CreateVodPromotionPathParams;
    request: CreateVodPromotionRequestBody;
    security: CreateVodPromotionSecurity;
}
export declare class CreateVodPromotionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandPromotion?: shared.OnDemandPromotion;
}
