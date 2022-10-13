from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
DELETE_ARCHIVED_CALL_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class DeleteArchivedCallPathParams:
    date: datetime = field(default=None, metadata={'path_param': { 'field_name': 'Date', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteArchivedCallSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteArchivedCallRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteArchivedCallPathParams = field(default=None)
    security: DeleteArchivedCallSecurity = field(default=None)
    

@dataclass
class DeleteArchivedCallResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
