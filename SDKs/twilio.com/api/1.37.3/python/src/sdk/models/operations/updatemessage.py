from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_MESSAGE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateMessagePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateMessageUpdateMessageRequest:
    body: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'Body' }})
    status: Optional[shared.MessageEnumUpdateStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateMessageSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMessageRequest:
    path_params: UpdateMessagePathParams = field()
    security: UpdateMessageSecurity = field()
    request: Optional[UpdateMessageUpdateMessageRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateMessageResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_message: Optional[shared.APIV2010AccountMessage] = field(default=None)
    
