from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_MEMBER_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateMemberPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    call_sid: str = field(metadata={'path_param': { 'field_name': 'CallSid', 'style': 'simple', 'explode': False }})
    queue_sid: str = field(metadata={'path_param': { 'field_name': 'QueueSid', 'style': 'simple', 'explode': False }})
    
class UpdateMemberUpdateMemberRequestMethodEnum(str, Enum):
    HEAD = "HEAD"
    GET = "GET"
    POST = "POST"
    PATCH = "PATCH"
    PUT = "PUT"
    DELETE = "DELETE"


@dataclass
class UpdateMemberUpdateMemberRequest:
    url: str = field(metadata={'form': { 'field_name': 'Url' }})
    method: Optional[UpdateMemberUpdateMemberRequestMethodEnum] = field(default=None, metadata={'form': { 'field_name': 'Method' }})
    

@dataclass
class UpdateMemberSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateMemberRequest:
    path_params: UpdateMemberPathParams = field()
    security: UpdateMemberSecurity = field()
    request: Optional[UpdateMemberUpdateMemberRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateMemberResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_queue_member: Optional[shared.APIV2010AccountQueueMember] = field(default=None)
    
