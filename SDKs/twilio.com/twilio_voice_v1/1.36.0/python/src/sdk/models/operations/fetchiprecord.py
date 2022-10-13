from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchIPRecordPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchIPRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchIPRecordRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchIPRecordPathParams = field(default=None)
    security: FetchIPRecordSecurity = field(default=None)
    

@dataclass
class FetchIPRecordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    voice_v1_ip_record: Optional[shared.VoiceV1IPRecord] = field(default=None)
    
