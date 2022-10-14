package shared

import (
	"time"
)

type APIV2010AccountUsageUsageRecordUsageRecordMonthly struct {
	AccountSid      *string                             `json:"account_sid,omitempty"`
	APIVersion      *string                             `json:"api_version,omitempty"`
	AsOf            *string                             `json:"as_of,omitempty"`
	Category        *UsageRecordMonthlyEnumCategoryEnum `json:"category,omitempty"`
	Count           *string                             `json:"count,omitempty"`
	CountUnit       *string                             `json:"count_unit,omitempty"`
	Description     *string                             `json:"description,omitempty"`
	EndDate         *time.Time                          `json:"end_date,omitempty"`
	Price           *float64                            `json:"price,omitempty"`
	PriceUnit       *string                             `json:"price_unit,omitempty"`
	StartDate       *time.Time                          `json:"start_date,omitempty"`
	SubresourceUris map[string]interface{}              `json:"subresource_uris,omitempty"`
	URI             *string                             `json:"uri,omitempty"`
	Usage           *string                             `json:"usage,omitempty"`
	UsageUnit       *string                             `json:"usage_unit,omitempty"`
}
