package shared

import (
	"time"
)

type MessagingV1BrandRegistrations struct {
	A2pProfileBundleSid      *string                                   `json:"a2p_profile_bundle_sid"`
	AccountSid               *string                                   `json:"account_sid"`
	BrandFeedback            []BrandRegistrationsEnumBrandFeedbackEnum `json:"brand_feedback"`
	BrandScore               *int64                                    `json:"brand_score"`
	BrandType                *string                                   `json:"brand_type"`
	CustomerProfileBundleSid *string                                   `json:"customer_profile_bundle_sid"`
	DateCreated              *time.Time                                `json:"date_created"`
	DateUpdated              *time.Time                                `json:"date_updated"`
	FailureReason            *string                                   `json:"failure_reason"`
	GovernmentEntity         *bool                                     `json:"government_entity"`
	IdentityStatus           *BrandRegistrationsEnumIdentityStatusEnum `json:"identity_status"`
	Links                    map[string]interface{}                    `json:"links"`
	Mock                     *bool                                     `json:"mock"`
	Russell3000              *bool                                     `json:"russell_3000"`
	Sid                      *string                                   `json:"sid"`
	SkipAutomaticSecVet      *bool                                     `json:"skip_automatic_sec_vet"`
	Status                   *BrandRegistrationsEnumStatusEnum         `json:"status"`
	TaxExemptStatus          *string                                   `json:"tax_exempt_status"`
	TcrID                    *string                                   `json:"tcr_id"`
	URL                      *string                                   `json:"url"`
}
