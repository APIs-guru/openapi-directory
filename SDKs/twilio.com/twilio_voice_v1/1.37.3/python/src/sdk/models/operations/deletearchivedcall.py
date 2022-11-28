from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


DELETE_ARCHIVED_CALL_SERVERS = [
	"https://voice.twilio.com",
]


@dataclass
class DeleteArchivedCallPathParams:
    date_: date = field(metadata={'path_param': { 'field_name': 'Date', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteArchivedCallSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteArchivedCallRequest:
    path_params: DeleteArchivedCallPathParams = field()
    security: DeleteArchivedCallSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class DeleteArchivedCallResponse:
    content_type: str = field()
    status_code: int = field()
    
