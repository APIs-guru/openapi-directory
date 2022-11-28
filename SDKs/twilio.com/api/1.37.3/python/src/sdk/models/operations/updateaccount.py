from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


UPDATE_ACCOUNT_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateAccountPathParams:
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateAccountUpdateAccountRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    status: Optional[shared.AccountEnumStatusEnum] = field(default=None, metadata={'form': { 'field_name': 'Status' }})
    

@dataclass
class UpdateAccountSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateAccountRequest:
    path_params: UpdateAccountPathParams = field()
    security: UpdateAccountSecurity = field()
    request: Optional[UpdateAccountUpdateAccountRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateAccountResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account: Optional[shared.APIV2010Account] = field(default=None)
    
