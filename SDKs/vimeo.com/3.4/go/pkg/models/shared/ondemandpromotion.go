package shared

type OnDemandPromotionAccessTypeEnum string

const (
	OnDemandPromotionAccessTypeEnumDefault OnDemandPromotionAccessTypeEnum = "default"
	OnDemandPromotionAccessTypeEnumVip     OnDemandPromotionAccessTypeEnum = "vip"
)

type OnDemandPromotionDiscountTypeEnum string

const (
	OnDemandPromotionDiscountTypeEnumDollars OnDemandPromotionDiscountTypeEnum = "dollars"
	OnDemandPromotionDiscountTypeEnumFree    OnDemandPromotionDiscountTypeEnum = "free"
	OnDemandPromotionDiscountTypeEnumPercent OnDemandPromotionDiscountTypeEnum = "percent"
)

// OnDemandPromotionMetadataConnectionsCodes
// Information about the codes associated with this promotion.
type OnDemandPromotionMetadataConnectionsCodes struct {
	Options []string `json:"options"`
	Total   float64  `json:"total"`
	URI     string   `json:"uri"`
}

// OnDemandPromotionMetadataConnections
// A list of resource URIs related to the On Demand promotion.
type OnDemandPromotionMetadataConnections struct {
	Codes OnDemandPromotionMetadataConnectionsCodes `json:"codes"`
}

// OnDemandPromotionMetadata
// The video's metadata.
type OnDemandPromotionMetadata struct {
	Connections OnDemandPromotionMetadataConnections `json:"connections"`
}

type OnDemandPromotionProductTypeEnum string

const (
	OnDemandPromotionProductTypeEnumAny         OnDemandPromotionProductTypeEnum = "any"
	OnDemandPromotionProductTypeEnumBuy         OnDemandPromotionProductTypeEnum = "buy"
	OnDemandPromotionProductTypeEnumBuyEpisode  OnDemandPromotionProductTypeEnum = "buy_episode"
	OnDemandPromotionProductTypeEnumRent        OnDemandPromotionProductTypeEnum = "rent"
	OnDemandPromotionProductTypeEnumRentEpisode OnDemandPromotionProductTypeEnum = "rent_episode"
	OnDemandPromotionProductTypeEnumSubscribe   OnDemandPromotionProductTypeEnum = "subscribe"
)

type OnDemandPromotionStreamPeriodEnum string

const (
	OnDemandPromotionStreamPeriodEnumOneWeek        OnDemandPromotionStreamPeriodEnum = "1_week"
	OnDemandPromotionStreamPeriodEnumOneYear        OnDemandPromotionStreamPeriodEnum = "1_year"
	OnDemandPromotionStreamPeriodEnumTwentyFourHour OnDemandPromotionStreamPeriodEnum = "24_hour"
	OnDemandPromotionStreamPeriodEnumThirtyDays     OnDemandPromotionStreamPeriodEnum = "30_days"
	OnDemandPromotionStreamPeriodEnumThreeMonth     OnDemandPromotionStreamPeriodEnum = "3_month"
	OnDemandPromotionStreamPeriodEnumFortyEightHour OnDemandPromotionStreamPeriodEnum = "48_hour"
	OnDemandPromotionStreamPeriodEnumSixMonth       OnDemandPromotionStreamPeriodEnum = "6_month"
	OnDemandPromotionStreamPeriodEnumSeventyTwoHour OnDemandPromotionStreamPeriodEnum = "72_hour"
)

type OnDemandPromotionTypeEnum string

const (
	OnDemandPromotionTypeEnumBatch       OnDemandPromotionTypeEnum = "batch"
	OnDemandPromotionTypeEnumBatchPrefix OnDemandPromotionTypeEnum = "batch_prefix"
	OnDemandPromotionTypeEnumSingle      OnDemandPromotionTypeEnum = "single"
)

type OnDemandPromotion struct {
	AccessType   OnDemandPromotionAccessTypeEnum   `json:"access_type"`
	DiscountType OnDemandPromotionDiscountTypeEnum `json:"discount_type"`
	Download     bool                              `json:"download"`
	Label        string                            `json:"label"`
	Metadata     OnDemandPromotionMetadata         `json:"metadata"`
	PercentOff   float64                           `json:"percent_off"`
	ProductType  OnDemandPromotionProductTypeEnum  `json:"product_type"`
	StreamPeriod OnDemandPromotionStreamPeriodEnum `json:"stream_period"`
	Total        float64                           `json:"total"`
	Type         OnDemandPromotionTypeEnum         `json:"type"`
	URI          string                            `json:"uri"`
}
