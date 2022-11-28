import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateVodPromotionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ondemand_id" })
  ondemandId: number;
}

export enum CreateVodPromotionRequestBodyAccessTypeEnum {
    Default = "default",
    Vip = "vip"
}

export enum CreateVodPromotionRequestBodyDiscountTypeEnum {
    Free = "free",
    Percent = "percent"
}

export enum CreateVodPromotionRequestBodyProductTypeEnum {
    Any = "any",
    Buy = "buy",
    BuyEpisode = "buy_episode",
    Rent = "rent",
    RentEpisode = "rent_episode",
    Subscribe = "subscribe"
}

export enum CreateVodPromotionRequestBodyStreamPeriodEnum {
    OneWeek = "1_week",
    OneYear = "1_year",
    TwentyFourHour = "24_hour",
    ThirtyDay = "30_day",
    ThreeMonth = "3_month",
    FortyEightHour = "48_hour",
    SixMonth = "6_month",
    SeventyTwoHour = "72_hour"
}

export enum CreateVodPromotionRequestBodyTypeEnum {
    Batch = "batch",
    Single = "single"
}


export class CreateVodPromotionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_type" })
  accessType?: CreateVodPromotionRequestBodyAccessTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=discount_type" })
  discountType?: CreateVodPromotionRequestBodyDiscountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=download" })
  download: boolean;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=percent_off" })
  percentOff?: number;

  @SpeakeasyMetadata({ data: "json, name=product_type" })
  productType?: CreateVodPromotionRequestBodyProductTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=stream_period" })
  streamPeriod: CreateVodPromotionRequestBodyStreamPeriodEnum;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: CreateVodPromotionRequestBodyTypeEnum;
}


export class CreateVodPromotionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateVodPromotionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateVodPromotionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/vnd.vimeo.ondemand.promotion+json" })
  request: CreateVodPromotionRequestBody;

  @SpeakeasyMetadata()
  security: CreateVodPromotionSecurity;
}


export class CreateVodPromotionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  legacyError?: shared.LegacyError;

  @SpeakeasyMetadata()
  onDemandPromotion?: shared.OnDemandPromotion;
}
