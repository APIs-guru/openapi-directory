from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_MEMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchMemberPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    queue_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'QueueSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchMemberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchMemberRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchMemberPathParams = field(default=None)
    security: FetchMemberSecurity = field(default=None)
    

@dataclass
class FetchMemberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_queue_member: Optional[shared.APIV2010AccountQueueMember] = field(default=None)
    
