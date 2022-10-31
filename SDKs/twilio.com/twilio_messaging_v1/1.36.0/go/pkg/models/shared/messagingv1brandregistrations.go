package shared

import (
"time")

type MessagingV1BrandRegistrations struct {
    A2pProfileBundleSid *string `json:"a2p_profile_bundle_sid,omitempty"`
    AccountSid *string `json:"account_sid,omitempty"`
    BrandFeedback []BrandRegistrationsEnumBrandFeedbackEnum `json:"brand_feedback,omitempty"`
    BrandScore *int64 `json:"brand_score,omitempty"`
    BrandType *string `json:"brand_type,omitempty"`
    CustomerProfileBundleSid *string `json:"customer_profile_bundle_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    FailureReason *string `json:"failure_reason,omitempty"`
    GovernmentEntity *bool `json:"government_entity,omitempty"`
    IdentityStatus *BrandRegistrationsEnumIdentityStatusEnum `json:"identity_status,omitempty"`
    Links map[string]interface{} `json:"links,omitempty"`
    Mock *bool `json:"mock,omitempty"`
    Russell3000 *bool `json:"russell_3000,omitempty"`
    Sid *string `json:"sid,omitempty"`
    SkipAutomaticSecVet *bool `json:"skip_automatic_sec_vet,omitempty"`
    Status *BrandRegistrationsEnumStatusEnum `json:"status,omitempty"`
    TaxExemptStatus *string `json:"tax_exempt_status,omitempty"`
    TcrID *string `json:"tcr_id,omitempty"`
    URL *string `json:"url,omitempty"`
    
}

