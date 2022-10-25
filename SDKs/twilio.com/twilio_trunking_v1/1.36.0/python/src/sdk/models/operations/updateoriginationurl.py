from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_ORIGINATION_URL_SERVERS = [
	"https://trunking.twilio.com",
]


@dataclass
class UpdateOriginationURLPathParams:
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    trunk_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'TrunkSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateOriginationURLUpdateOriginationURLRequest:
    enabled: Optional[bool] = field(default=None, metadata={'form': { 'field_name': 'Enabled' }})
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    priority: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Priority' }})
    sip_url: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'SipUrl' }})
    weight: Optional[int] = field(default=None, metadata={'form': { 'field_name': 'Weight' }})
    

@dataclass
class UpdateOriginationURLSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateOriginationURLRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateOriginationURLPathParams = field(default=None)
    request: Optional[UpdateOriginationURLUpdateOriginationURLRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateOriginationURLSecurity = field(default=None)
    

@dataclass
class UpdateOriginationURLResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    trunking_v1_trunk_origination_url: Optional[shared.TrunkingV1TrunkOriginationURL] = field(default=None)
    
