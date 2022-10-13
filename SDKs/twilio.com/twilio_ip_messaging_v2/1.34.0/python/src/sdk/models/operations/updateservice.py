from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SERVICE_SERVERS = [
	"https://ip-messaging.twilio.com",
]


@dataclass
class UpdateServicePathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateServiceSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateServiceRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateServicePathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateServiceSecurity = field(default=None)
    

@dataclass
class UpdateServiceResponses:
    ip_messaging_v2_service: Optional[shared.IPMessagingV2Service] = field(default=None)
    

@dataclass
class UpdateServiceResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateServiceResponses]] = field(default=None)
    status_code: int = field(default=None)
    
