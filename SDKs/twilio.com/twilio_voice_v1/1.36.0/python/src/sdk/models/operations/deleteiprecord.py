from dataclasses import dataclass, field
from typing import Optional
DELETE_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class DeleteIPRecordPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIPRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteIPRecordRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteIPRecordPathParams = field(default=None)
    security: DeleteIPRecordSecurity = field(default=None)
    

@dataclass
class DeleteIPRecordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
