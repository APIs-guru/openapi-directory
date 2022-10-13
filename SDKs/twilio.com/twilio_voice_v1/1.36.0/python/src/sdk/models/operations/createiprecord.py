from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class CreateIPRecordRequestBodyCreateIPRecordRequest:
    cidr_prefix_length: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'CidrPrefixLength' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    ip_address: str = field(default=None, metadata={'form': { 'field_name': 'IpAddress' }})
    

@dataclass
class CreateIPRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateIPRecordRequest:
    server_url: Optional[str] = field(default=None)
    request: Optional[CreateIPRecordRequestBodyCreateIPRecordRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateIPRecordSecurity = field(default=None)
    

@dataclass
class CreateIPRecordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    voice_v1_ip_record: Optional[shared.VoiceV1IPRecord] = field(default=None)
    
