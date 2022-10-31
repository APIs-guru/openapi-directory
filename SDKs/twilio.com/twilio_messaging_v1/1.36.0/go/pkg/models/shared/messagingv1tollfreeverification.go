package shared

import (
"time")

type MessagingV1TollfreeVerification struct {
    AccountSid *string `json:"account_sid,omitempty"`
    AdditionalInformation *string `json:"additional_information,omitempty"`
    BusinessCity *string `json:"business_city,omitempty"`
    BusinessContactEmail *string `json:"business_contact_email,omitempty"`
    BusinessContactFirstName *string `json:"business_contact_first_name,omitempty"`
    BusinessContactLastName *string `json:"business_contact_last_name,omitempty"`
    BusinessContactPhone *string `json:"business_contact_phone,omitempty"`
    BusinessCountry *string `json:"business_country,omitempty"`
    BusinessName *string `json:"business_name,omitempty"`
    BusinessPostalCode *string `json:"business_postal_code,omitempty"`
    BusinessStateProvinceRegion *string `json:"business_state_province_region,omitempty"`
    BusinessStreetAddress *string `json:"business_street_address,omitempty"`
    BusinessStreetAddress2 *string `json:"business_street_address2,omitempty"`
    BusinessWebsite *string `json:"business_website,omitempty"`
    CustomerProfileSid *string `json:"customer_profile_sid,omitempty"`
    DateCreated *time.Time `json:"date_created,omitempty"`
    DateUpdated *time.Time `json:"date_updated,omitempty"`
    MessageVolume *string `json:"message_volume,omitempty"`
    NotificationEmail *string `json:"notification_email,omitempty"`
    OptInImageUrls []string `json:"opt_in_image_urls,omitempty"`
    OptInType *TollfreeVerificationEnumOptInTypeEnum `json:"opt_in_type,omitempty"`
    ProductionMessageSample *string `json:"production_message_sample,omitempty"`
    RegulatedItemSid *string `json:"regulated_item_sid,omitempty"`
    ResourceLinks *interface{} `json:"resource_links,omitempty"`
    Sid *string `json:"sid,omitempty"`
    Status *TollfreeVerificationEnumStatusEnum `json:"status,omitempty"`
    TollfreePhoneNumberSid *string `json:"tollfree_phone_number_sid,omitempty"`
    TrustProductSid *string `json:"trust_product_sid,omitempty"`
    URL *string `json:"url,omitempty"`
    UseCaseCategories []string `json:"use_case_categories,omitempty"`
    UseCaseSummary *string `json:"use_case_summary,omitempty"`
    
}

