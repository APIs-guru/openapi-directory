from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared
CREATE_SERVICE_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class CreateServiceCreateServiceRequest:
    callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'CallbackUrl' }})
    chat_instance_sid: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'ChatInstanceSid' }})
    default_ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'DefaultTtl' }})
    geo_match_level: Optional[shared.ServiceEnumGeoMatchLevelEnum] = field(default=None, metadata={'form': { 'field_name': 'GeoMatchLevel' }})
    intercept_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'InterceptCallbackUrl' }})
    number_selection_behavior: Optional[shared.ServiceEnumNumberSelectionBehaviorEnum] = field(default=None, metadata={'form': { 'field_name': 'NumberSelectionBehavior' }})
    out_of_session_callback_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'OutOfSessionCallbackUrl' }})
    unique_name: str = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateServiceRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateServiceCreateServiceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateServiceSecurity = field(default=None)
    

@dataclass
class CreateServiceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    proxy_v1_service: Optional[shared.ProxyV1Service] = field(default=None)
    
