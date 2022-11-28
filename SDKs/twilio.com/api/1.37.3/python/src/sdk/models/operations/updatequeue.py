from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_QUEUE_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateQueuePathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateQueueUpdateQueueRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    max_size: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'MaxSize' }})
    

@dataclass
class UpdateQueueSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateQueueRequest:
    path_params: UpdateQueuePathParams = field()
    security: UpdateQueueSecurity = field()
    request: Optional[UpdateQueueUpdateQueueRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateQueueResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_queue: Optional[shared.APIV2010AccountQueue] = field(default=None)
    
