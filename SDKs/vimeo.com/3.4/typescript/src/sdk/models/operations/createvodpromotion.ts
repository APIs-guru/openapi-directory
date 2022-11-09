import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateVodPromotionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}

export enum CreateVodPromotionRequestBodyAccessTypeEnum {
    Default = "default"
,    Vip = "vip"
}

export enum CreateVodPromotionRequestBodyDiscountTypeEnum {
    Free = "free"
,    Percent = "percent"
}

export enum CreateVodPromotionRequestBodyProductTypeEnum {
    Any = "any"
,    Buy = "buy"
,    BuyEpisode = "buy_episode"
,    Rent = "rent"
,    RentEpisode = "rent_episode"
,    Subscribe = "subscribe"
}

export enum CreateVodPromotionRequestBodyStreamPeriodEnum {
    OneWeek = "1_week"
,    OneYear = "1_year"
,    TwentyFourHour = "24_hour"
,    ThirtyDay = "30_day"
,    ThreeMonth = "3_month"
,    FortyEightHour = "48_hour"
,    SixMonth = "6_month"
,    SeventyTwoHour = "72_hour"
}

export enum CreateVodPromotionRequestBodyTypeEnum {
    Batch = "batch"
,    Single = "single"
}


export class CreateVodPromotionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_type" })
  accessType?: CreateVodPromotionRequestBodyAccessTypeEnum;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=discount_type" })
  discountType?: CreateVodPromotionRequestBodyDiscountTypeEnum;

  @Metadata({ data: "json, name=download" })
  download: boolean;

  @Metadata({ data: "json, name=end_time" })
  endTime?: string;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=percent_off" })
  percentOff?: number;

  @Metadata({ data: "json, name=product_type" })
  productType?: CreateVodPromotionRequestBodyProductTypeEnum;

  @Metadata({ data: "json, name=start_time" })
  startTime?: string;

  @Metadata({ data: "json, name=stream_period" })
  streamPeriod: CreateVodPromotionRequestBodyStreamPeriodEnum;

  @Metadata({ data: "json, name=total" })
  total: number;

  @Metadata({ data: "json, name=type" })
  type: CreateVodPromotionRequestBodyTypeEnum;
}


export class CreateVodPromotionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateVodPromotionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateVodPromotionPathParams;

  @Metadata({ data: "request, media_type=application/vnd.vimeo.ondemand.promotion+json" })
  request: CreateVodPromotionRequestBody;

  @Metadata()
  security: CreateVodPromotionSecurity;
}


export class CreateVodPromotionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  legacyError?: shared.LegacyError;

  @Metadata()
  onDemandPromotion?: shared.OnDemandPromotion;
}
