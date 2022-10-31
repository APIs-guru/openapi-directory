package operations

import (
"openapi/pkg/models/shared")

type CreateVodPromotionPathParams struct {
    OndemandID float64 `pathParam:"style=simple,explode=false,name=ondemand_id"`
    
}


type CreateVodPromotionRequestBodyAccessTypeEnum string

const (
    CreateVodPromotionRequestBodyAccessTypeEnumDefault CreateVodPromotionRequestBodyAccessTypeEnum = "default"
CreateVodPromotionRequestBodyAccessTypeEnumVip CreateVodPromotionRequestBodyAccessTypeEnum = "vip"
)



type CreateVodPromotionRequestBodyDiscountTypeEnum string

const (
    CreateVodPromotionRequestBodyDiscountTypeEnumFree CreateVodPromotionRequestBodyDiscountTypeEnum = "free"
CreateVodPromotionRequestBodyDiscountTypeEnumPercent CreateVodPromotionRequestBodyDiscountTypeEnum = "percent"
)



type CreateVodPromotionRequestBodyProductTypeEnum string

const (
    CreateVodPromotionRequestBodyProductTypeEnumAny CreateVodPromotionRequestBodyProductTypeEnum = "any"
CreateVodPromotionRequestBodyProductTypeEnumBuy CreateVodPromotionRequestBodyProductTypeEnum = "buy"
CreateVodPromotionRequestBodyProductTypeEnumBuyEpisode CreateVodPromotionRequestBodyProductTypeEnum = "buy_episode"
CreateVodPromotionRequestBodyProductTypeEnumRent CreateVodPromotionRequestBodyProductTypeEnum = "rent"
CreateVodPromotionRequestBodyProductTypeEnumRentEpisode CreateVodPromotionRequestBodyProductTypeEnum = "rent_episode"
CreateVodPromotionRequestBodyProductTypeEnumSubscribe CreateVodPromotionRequestBodyProductTypeEnum = "subscribe"
)



type CreateVodPromotionRequestBodyStreamPeriodEnum string

const (
    CreateVodPromotionRequestBodyStreamPeriodEnumOneWeek CreateVodPromotionRequestBodyStreamPeriodEnum = "1_week"
CreateVodPromotionRequestBodyStreamPeriodEnumOneYear CreateVodPromotionRequestBodyStreamPeriodEnum = "1_year"
CreateVodPromotionRequestBodyStreamPeriodEnumTwentyFourHour CreateVodPromotionRequestBodyStreamPeriodEnum = "24_hour"
CreateVodPromotionRequestBodyStreamPeriodEnumThirtyDay CreateVodPromotionRequestBodyStreamPeriodEnum = "30_day"
CreateVodPromotionRequestBodyStreamPeriodEnumThreeMonth CreateVodPromotionRequestBodyStreamPeriodEnum = "3_month"
CreateVodPromotionRequestBodyStreamPeriodEnumFortyEightHour CreateVodPromotionRequestBodyStreamPeriodEnum = "48_hour"
CreateVodPromotionRequestBodyStreamPeriodEnumSixMonth CreateVodPromotionRequestBodyStreamPeriodEnum = "6_month"
CreateVodPromotionRequestBodyStreamPeriodEnumSeventyTwoHour CreateVodPromotionRequestBodyStreamPeriodEnum = "72_hour"
)



type CreateVodPromotionRequestBodyTypeEnum string

const (
    CreateVodPromotionRequestBodyTypeEnumBatch CreateVodPromotionRequestBodyTypeEnum = "batch"
CreateVodPromotionRequestBodyTypeEnumSingle CreateVodPromotionRequestBodyTypeEnum = "single"
)


type CreateVodPromotionRequestBody struct {
    AccessType *CreateVodPromotionRequestBodyAccessTypeEnum `json:"access_type,omitempty"`
    Code *string `json:"code,omitempty"`
    DiscountType *CreateVodPromotionRequestBodyDiscountTypeEnum `json:"discount_type,omitempty"`
    Download bool `json:"download"`
    EndTime *string `json:"end_time,omitempty"`
    Label *string `json:"label,omitempty"`
    PercentOff *float64 `json:"percent_off,omitempty"`
    ProductType *CreateVodPromotionRequestBodyProductTypeEnum `json:"product_type,omitempty"`
    StartTime *string `json:"start_time,omitempty"`
    StreamPeriod CreateVodPromotionRequestBodyStreamPeriodEnum `json:"stream_period"`
    Total float64 `json:"total"`
    Type CreateVodPromotionRequestBodyTypeEnum `json:"type"`
    
}

type CreateVodPromotionSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type CreateVodPromotionRequest struct {
    PathParams CreateVodPromotionPathParams 
    Request CreateVodPromotionRequestBody `request:"mediaType=application/vnd.vimeo.ondemand.promotion+json"`
    Security CreateVodPromotionSecurity 
    
}

type CreateVodPromotionResponse struct {
    ContentType string 
    StatusCode int64 
    LegacyError *shared.LegacyError 
    OnDemandPromotion *shared.OnDemandPromotion 
    
}

