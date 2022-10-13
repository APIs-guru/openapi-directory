from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared
CREATE_TOLLFREE_VERIFICATION_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class CreateTollfreeVerificationRequestBodyCreateTollfreeVerificationRequest:
    additional_information: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'AdditionalInformation' }})
    business_city: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessCity' }})
    business_contact_email: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessContactEmail' }})
    business_contact_first_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessContactFirstName' }})
    business_contact_last_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessContactLastName' }})
    business_contact_phone: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessContactPhone' }})
    business_country: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessCountry' }})
    business_name: str = field(default=None, metadata={'form': { 'field_name': 'BusinessName' }})
    business_postal_code: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessPostalCode' }})
    business_state_province_region: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessStateProvinceRegion' }})
    business_street_address: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessStreetAddress' }})
    business_street_address2: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'BusinessStreetAddress2' }})
    business_website: str = field(default=None, metadata={'form': { 'field_name': 'BusinessWebsite' }})
    customer_profile_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CustomerProfileSid' }})
    message_volume: str = field(default=None, metadata={'form': { 'field_name': 'MessageVolume' }})
    notification_email: str = field(default=None, metadata={'form': { 'field_name': 'NotificationEmail' }})
    opt_in_image_urls: List[str] = field(default=None, metadata={'form': { 'field_name': 'OptInImageUrls' }})
    opt_in_type: shared.TollfreeVerificationEnumOptInTypeEnum = field(default=None, metadata={'form': { 'field_name': 'OptInType' }})
    production_message_sample: str = field(default=None, metadata={'form': { 'field_name': 'ProductionMessageSample' }})
    tollfree_phone_number_sid: str = field(default=None, metadata={'form': { 'field_name': 'TollfreePhoneNumberSid' }})
    use_case_categories: List[str] = field(default=None, metadata={'form': { 'field_name': 'UseCaseCategories' }})
    use_case_summary: str = field(default=None, metadata={'form': { 'field_name': 'UseCaseSummary' }})
    

@dataclass
class CreateTollfreeVerificationSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateTollfreeVerificationRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateTollfreeVerificationRequestBodyCreateTollfreeVerificationRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateTollfreeVerificationSecurity = field(default=None)
    

@dataclass
class CreateTollfreeVerificationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    messaging_v1_tollfree_verification: Optional[shared.MessagingV1TollfreeVerification] = field(default=None)
    
