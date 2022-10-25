from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from sdk.models import shared
UPDATE_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class UpdateSessionPathParams:
    service_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSessionUpdateSessionRequest:
    date_expiry: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateExpiry' }})
    fail_on_participant_conflict: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'FailOnParticipantConflict' }})
    status: Optional[shared.SessionEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class UpdateSessionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSessionRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSessionPathParams = field(default=None)
    request: Optional[UpdateSessionUpdateSessionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSessionSecurity = field(default=None)
    

@dataclass
class UpdateSessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    proxy_v1_service_session: Optional[shared.ProxyV1ServiceSession] = field(default=None)
    
