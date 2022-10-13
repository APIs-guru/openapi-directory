from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
UPDATE_SIP_DOMAIN_SERVERS = [
	"https://routes.twilio.com",
]


@dataclass
class UpdateSipDomainPathParams:
    sip_domain: str = field(default=None, metadata={'path_param': { 'field_name': 'SipDomain', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSipDomainRequestBodyUpdateSipDomainRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    voice_region: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceRegion' }})
    

@dataclass
class UpdateSipDomainSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSipDomainRequest:
    server_url: Optional[str] = field(default=None)
    path_params: UpdateSipDomainPathParams = field(default=None)
    request: Optional[UpdateSipDomainRequestBodyUpdateSipDomainRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: UpdateSipDomainSecurity = field(default=None)
    

@dataclass
class UpdateSipDomainResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    routes_v2_sip_domain: Optional[shared.RoutesV2SipDomain] = field(default=None)
    
