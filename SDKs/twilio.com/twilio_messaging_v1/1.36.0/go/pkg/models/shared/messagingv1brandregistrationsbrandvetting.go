package shared

import (
	"time"
)

type MessagingV1BrandRegistrationsBrandVetting struct {
	AccountSid      *string                              `json:"account_sid,omitempty"`
	BrandSid        *string                              `json:"brand_sid,omitempty"`
	BrandVettingSid *string                              `json:"brand_vetting_sid,omitempty"`
	DateCreated     *time.Time                           `json:"date_created,omitempty"`
	DateUpdated     *time.Time                           `json:"date_updated,omitempty"`
	URL             *string                              `json:"url,omitempty"`
	VettingClass    *string                              `json:"vetting_class,omitempty"`
	VettingID       *string                              `json:"vetting_id,omitempty"`
	VettingProvider *BrandVettingEnumVettingProviderEnum `json:"vetting_provider,omitempty"`
	VettingStatus   *string                              `json:"vetting_status,omitempty"`
}
