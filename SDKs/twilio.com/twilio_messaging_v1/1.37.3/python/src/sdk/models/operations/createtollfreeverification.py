from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


CREATE_TOLLFREE_VERIFICATION_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class CreateTollfreeVerificationCreateTollfreeVerificationRequest:
    business_name: str = field(metadata={'form': { 'field_name': 'BusinessName' }})
    business_website: str = field(metadata={'form': { 'field_name': 'BusinessWebsite' }})
    message_volume: str = field(metadata={'form': { 'field_name': 'MessageVolume' }})
    notification_email: str = field(metadata={'form': { 'field_name': 'NotificationEmail' }})
    opt_in_image_urls: List[str] = field(metadata={'form': { 'field_name': 'OptInImageUrls' }})
    opt_in_type: shared.TollfreeVerificationEnumOptInTypeEnum = field(metadata={'form': { 'field_name': 'OptInType' }})
    production_message_sample: str = field(metadata={'form': { 'field_name': 'ProductionMessageSample' }})
    tollfree_phone_number_sid: str = field(metadata={'form': { 'field_name': 'TollfreePhoneNumberSid' }})
    use_case_categories: List[str] = field(metadata={'form': { 'field_name': 'UseCaseCategories' }})
    use_case_summary: str = field(metadata={'form': { 'field_name': 'UseCaseSummary' }})
    additional_information: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AdditionalInformation' }})
    business_city: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessCity' }})
    business_contact_email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessContactEmail' }})
    business_contact_first_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessContactFirstName' }})
    business_contact_last_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessContactLastName' }})
    business_contact_phone: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessContactPhone' }})
    business_country: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessCountry' }})
    business_postal_code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessPostalCode' }})
    business_state_province_region: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessStateProvinceRegion' }})
    business_street_address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessStreetAddress' }})
    business_street_address2: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessStreetAddress2' }})
    customer_profile_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CustomerProfileSid' }})
    

@dataclass
class CreateTollfreeVerificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTollfreeVerificationRequest:
    security: CreateTollfreeVerificationSecurity = field()
    request: Optional[CreateTollfreeVerificationCreateTollfreeVerificationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateTollfreeVerificationResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_tollfree_verification: Optional[shared.MessagingV1TollfreeVerification] = field(default=None)
    
