from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_US_APP_TO_PERSON_USECASE_SERVERS = [
	"https://messaging.twilio.com",
]


@dataclass
class FetchUsAppToPersonUsecasePathParams:
    messaging_service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'MessagingServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchUsAppToPersonUsecaseQueryParams:
    brand_registration_sid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'BrandRegistrationSid', 'style': 'form', 'explode': True }})
    

@dataclass
class FetchUsAppToPersonUsecaseSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchUsAppToPersonUsecaseRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchUsAppToPersonUsecasePathParams = field(default=None)
    query_params: FetchUsAppToPersonUsecaseQueryParams = field(default=None)
    security: FetchUsAppToPersonUsecaseSecurity = field(default=None)
    

@dataclass
class FetchUsAppToPersonUsecaseResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    messaging_v1_service_us_app_to_person_usecase: Optional[shared.MessagingV1ServiceUsAppToPersonUsecase] = field(default=None)
    
