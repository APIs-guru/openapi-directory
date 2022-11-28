from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_IP_RECORD_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class UpdateIPRecordPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateIPRecordUpdateIPRecordRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateIPRecordSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateIPRecordRequest:
    path_params: UpdateIPRecordPathParams = field()
    security: UpdateIPRecordSecurity = field()
    request: Optional[UpdateIPRecordUpdateIPRecordRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateIPRecordResponse:
    content_type: str = field()
    status_code: int = field()
    voice_v1_ip_record: Optional[shared.VoiceV1IPRecord] = field(default=None)
    
