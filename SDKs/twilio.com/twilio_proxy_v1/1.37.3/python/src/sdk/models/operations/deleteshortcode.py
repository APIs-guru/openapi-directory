from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_SHORT_CODE_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class DeleteShortCodePathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteShortCodeSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteShortCodeRequest:
    path_params: DeleteShortCodePathParams = field()
    security: DeleteShortCodeSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteShortCodeResponse:
    content_type: str = field()
    status_code: int = field()
    
