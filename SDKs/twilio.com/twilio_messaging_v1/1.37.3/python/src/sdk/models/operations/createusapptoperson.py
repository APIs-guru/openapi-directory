from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


CREATE_US_APP_TO_PERSON_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class CreateUsAppToPersonPathParams:
    messaging_service_sid: str = field(metadata={'path_param': { 'field_name': 'MessagingServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUsAppToPersonCreateUsAppToPersonRequest:
    brand_registration_sid: str = field(metadata={'form': { 'field_name': 'BrandRegistrationSid' }})
    description: str = field(metadata={'form': { 'field_name': 'Description' }})
    has_embedded_links: bool = field(metadata={'form': { 'field_name': 'HasEmbeddedLinks' }})
    has_embedded_phone: bool = field(metadata={'form': { 'field_name': 'HasEmbeddedPhone' }})
    message_samples: List[str] = field(metadata={'form': { 'field_name': 'MessageSamples' }})
    us_app_to_person_usecase: str = field(metadata={'form': { 'field_name': 'UsAppToPersonUsecase' }})
    help_keywords: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'HelpKeywords' }})
    help_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'HelpMessage' }})
    message_flow: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'MessageFlow' }})
    opt_in_keywords: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'OptInKeywords' }})
    opt_in_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'OptInMessage' }})
    opt_out_keywords: Optional[List[str]] = field(default=None, metadata={'form': { 'field_name': 'OptOutKeywords' }})
    opt_out_message: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'OptOutMessage' }})
    

@dataclass
class CreateUsAppToPersonSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateUsAppToPersonRequest:
    path_params: CreateUsAppToPersonPathParams = field()
    security: CreateUsAppToPersonSecurity = field()
    request: Optional[CreateUsAppToPersonCreateUsAppToPersonRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateUsAppToPersonResponse:
    content_type: str = field()
    status_code: int = field()
    messaging_v1_service_us_app_to_person: Optional[shared.MessagingV1ServiceUsAppToPerson] = field(default=None)
    
