from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class FetchIPRecordPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchIPRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchIPRecordRequest:
    path_params: FetchIPRecordPathParams = field()
    security: FetchIPRecordSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchIPRecordResponse:
    content_type: str = field()
    status_code: int = field()
    voice_v1_ip_record: Optional[shared.VoiceV1IPRecord] = field(default=None)
    
