package shared

import (
	"time"
)

type MessagingV1BrandRegistrationsBrandVetting struct {
	AccountSid      *string                              `json:"account_sid"`
	BrandSid        *string                              `json:"brand_sid"`
	BrandVettingSid *string                              `json:"brand_vetting_sid"`
	DateCreated     *time.Time                           `json:"date_created"`
	DateUpdated     *time.Time                           `json:"date_updated"`
	URL             *string                              `json:"url"`
	VettingClass    *string                              `json:"vetting_class"`
	VettingID       *string                              `json:"vetting_id"`
	VettingProvider *BrandVettingEnumVettingProviderEnum `json:"vetting_provider"`
	VettingStatus   *string                              `json:"vetting_status"`
}
