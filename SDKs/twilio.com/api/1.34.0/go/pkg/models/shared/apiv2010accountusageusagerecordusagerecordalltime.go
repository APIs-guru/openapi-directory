package shared

import (
	"time"
)

type APIV2010AccountUsageUsageRecordUsageRecordAllTime struct {
	AccountSid      *string                             `json:"account_sid"`
	APIVersion      *string                             `json:"api_version"`
	AsOf            *string                             `json:"as_of"`
	Category        *UsageRecordAllTimeEnumCategoryEnum `json:"category"`
	Count           *string                             `json:"count"`
	CountUnit       *string                             `json:"count_unit"`
	Description     *string                             `json:"description"`
	EndDate         *time.Time                          `json:"end_date"`
	Price           *float64                            `json:"price"`
	PriceUnit       *string                             `json:"price_unit"`
	StartDate       *time.Time                          `json:"start_date"`
	SubresourceUris map[string]interface{}              `json:"subresource_uris"`
	URI             *string                             `json:"uri"`
	Usage           *string                             `json:"usage"`
	UsageUnit       *string                             `json:"usage_unit"`
}
