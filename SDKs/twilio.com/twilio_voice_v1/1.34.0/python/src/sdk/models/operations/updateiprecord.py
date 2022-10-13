from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class UpdateIPRecordPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateIPRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateIPRecordRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateIPRecordPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateIPRecordSecurity = field(default=None)
    

@dataclass
class UpdateIPRecordResponses:
    voice_v1_ip_record: Optional[shared.VoiceV1IPRecord] = field(default=None)
    

@dataclass
class UpdateIPRecordResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, UpdateIPRecordResponses]] = field(default=None)
    status_code: int = field(default=None)
    
