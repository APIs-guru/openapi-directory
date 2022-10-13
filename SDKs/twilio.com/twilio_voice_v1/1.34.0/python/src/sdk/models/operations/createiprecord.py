from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class CreateIPRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIPRecordRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateIPRecordSecurity = field(default=None)
    

@dataclass
class CreateIPRecordResponses:
    voice_v1_ip_record: Optional[shared.VoiceV1IPRecord] = field(default=None)
    

@dataclass
class CreateIPRecordResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateIPRecordResponses]] = field(default=None)
    status_code: int = field(default=None)
    
