from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


UPDATE_SIP_DOMAIN_SERVERS = [
	"https://routes.twilio.com",
]


@dataclass
class UpdateSipDomainPathParams:
    sip_domain: str = field(metadata={'path_param': { 'field_name': 'SipDomain', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSipDomainUpdateSipDomainRequest:
    friendly_name: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'FriendlyName' }})
    voice_region: Optional[str] = field(default=None, metadata={'form': { 'field_name': 'VoiceRegion' }})
    

@dataclass
class UpdateSipDomainSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class UpdateSipDomainRequest:
    path_params: UpdateSipDomainPathParams = field()
    security: UpdateSipDomainSecurity = field()
    request: Optional[UpdateSipDomainUpdateSipDomainRequest] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class UpdateSipDomainResponse:
    content_type: str = field()
    status_code: int = field()
    routes_v2_sip_domain: Optional[shared.RoutesV2SipDomain] = field(default=None)
    
