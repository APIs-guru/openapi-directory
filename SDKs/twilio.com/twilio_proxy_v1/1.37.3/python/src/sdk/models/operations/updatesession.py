from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class UpdateSessionPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSessionUpdateSessionRequest:
    date_expiry: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateExpiry' }})
    status: Optional[shared.SessionEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    

@dataclass
class UpdateSessionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSessionRequest:
    path_params: UpdateSessionPathParams = field()
    security: UpdateSessionSecurity = field()
    request: Optional[UpdateSessionUpdateSessionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSessionResponse:
    content_type: str = field()
    status_code: int = field()
    proxy_v1_service_session: Optional[shared.ProxyV1ServiceSession] = field(default=None)
    
