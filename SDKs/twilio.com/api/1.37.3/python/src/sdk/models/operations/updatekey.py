from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_KEY_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class UpdateKeyPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateKeyUpdateKeyRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    

@dataclass
class UpdateKeySecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateKeyRequest:
    path_params: UpdateKeyPathParams = field()
    security: UpdateKeySecurity = field()
    request: Optional[UpdateKeyUpdateKeyRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateKeyResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_key: Optional[shared.APIV2010AccountKey] = field(default=None)
    
