from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


CREATE_ORIGINATION_URL_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class CreateOriginationURLPathParams:
    trunk_sid: str = field(metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateOriginationURLCreateOriginationURLRequest:
    enabled: bool = field(metadata={'form': { 'field_name': 'Enabled' }})
    friendly_name: str = field(metadata={'form': { 'field_name': 'FriendlyName' }})
    priority: int = field(metadata={'form': { 'field_name': 'Priority' }})
    sip_url: str = field(metadata={'form': { 'field_name': 'SipUrl' }})
    weight: int = field(metadata={'form': { 'field_name': 'Weight' }})
    

@dataclass
class CreateOriginationURLSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateOriginationURLRequest:
    path_params: CreateOriginationURLPathParams = field()
    security: CreateOriginationURLSecurity = field()
    request: Optional[CreateOriginationURLCreateOriginationURLRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class CreateOriginationURLResponse:
    content_type: str = field()
    status_code: int = field()
    trunking_v1_trunk_origination_url: Optional[shared.TrunkingV1TrunkOriginationURL] = field(default=None)
    
