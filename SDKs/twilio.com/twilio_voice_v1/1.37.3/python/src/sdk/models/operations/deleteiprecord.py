from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


DELETE_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class DeleteIPRecordPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteIPRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteIPRecordRequest:
    path_params: DeleteIPRecordPathParams = field()
    security: DeleteIPRecordSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteIPRecordResponse:
    content_type: str = field()
    status_code: int = field()
    
