from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


CREATE_SESSION_SERVERS = [
	"https://proxy.twilio.com",
]


@dataclass
class CreateSessionPathParams:
    service_sid: str = field(metadata={'path_param': { 'field_name': 'ServiceSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSessionCreateSessionRequest:
    date_expiry: Optional[datetime] = field(default=None, metadata={'form': { 'field_name': 'DateExpiry' }})
    mode: Optional[shared.SessionEnumModeEnum] = field(default=None, metadata={'form': { 'field_name': 'Mode' }})
    participants: Optional[List[Any]] = field(default=None, metadata={'form': { 'field_name': 'Participants' }})
    status: Optional[shared.SessionEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    ttl: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Ttl' }})
    unique_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'UniqueName' }})
    

@dataclass
class CreateSessionSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSessionRequest:
    path_params: CreateSessionPathParams = field()
    security: CreateSessionSecurity = field()
    request: Optional[CreateSessionCreateSessionRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateSessionResponse:
    content_type: str = field()
    status_code: int = field()
    proxy_v1_service_session: Optional[shared.ProxyV1ServiceSession] = field(default=None)
    
