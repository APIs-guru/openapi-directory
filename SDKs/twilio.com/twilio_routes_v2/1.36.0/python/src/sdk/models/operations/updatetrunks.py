from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_TRUNKS_SERVERS = [
	"https://routes.twilio.com",
]


@dataclass
class UpdateTrunksPathParams:
    sip_trunk_domain: str = field(default=None, metadata={'path_param': { 'field_name': 'SipTrunkDomain', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateTrunksUpdateTrunksRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    voice_region: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceRegion' }})
    

@dataclass
class UpdateTrunksSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateTrunksRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateTrunksPathParams = field(default=None)
    request: Optional[UpdateTrunksUpdateTrunksRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateTrunksSecurity = field(default=None)
    

@dataclass
class UpdateTrunksResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    routes_v2_trunks: Optional[shared.RoutesV2Trunks] = field(default=None)
    
