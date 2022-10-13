package shared

import (
	"time"
)

type MessagingV1TollfreeVerification struct {
	AccountSid                  *string                                `json:"account_sid"`
	AdditionalInformation       *string                                `json:"additional_information"`
	BusinessCity                *string                                `json:"business_city"`
	BusinessContactEmail        *string                                `json:"business_contact_email"`
	BusinessContactFirstName    *string                                `json:"business_contact_first_name"`
	BusinessContactLastName     *string                                `json:"business_contact_last_name"`
	BusinessContactPhone        *string                                `json:"business_contact_phone"`
	BusinessCountry             *string                                `json:"business_country"`
	BusinessName                *string                                `json:"business_name"`
	BusinessPostalCode          *string                                `json:"business_postal_code"`
	BusinessStateProvinceRegion *string                                `json:"business_state_province_region"`
	BusinessStreetAddress       *string                                `json:"business_street_address"`
	BusinessStreetAddress2      *string                                `json:"business_street_address2"`
	BusinessWebsite             *string                                `json:"business_website"`
	CustomerProfileSid          *string                                `json:"customer_profile_sid"`
	DateCreated                 *time.Time                             `json:"date_created"`
	DateUpdated                 *time.Time                             `json:"date_updated"`
	MessageVolume               *string                                `json:"message_volume"`
	NotificationEmail           *string                                `json:"notification_email"`
	OptInImageUrls              []string                               `json:"opt_in_image_urls"`
	OptInType                   *TollfreeVerificationEnumOptInTypeEnum `json:"opt_in_type"`
	ProductionMessageSample     *string                                `json:"production_message_sample"`
	RegulatedItemSid            *string                                `json:"regulated_item_sid"`
	ResourceLinks               *interface{}                           `json:"resource_links"`
	Sid                         *string                                `json:"sid"`
	Status                      *TollfreeVerificationEnumStatusEnum    `json:"status"`
	TollfreePhoneNumberSid      *string                                `json:"tollfree_phone_number_sid"`
	TrustProductSid             *string                                `json:"trust_product_sid"`
	URL                         *string                                `json:"url"`
	UseCaseCategories           []string                               `json:"use_case_categories"`
	UseCaseSummary              *string                                `json:"use_case_summary"`
}
