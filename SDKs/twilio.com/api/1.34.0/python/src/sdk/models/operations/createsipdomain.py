from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
CREATE_SIP_DOMAIN_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class CreateSipDomainPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateSipDomainSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class CreateSipDomainRequest:
    server_url: Optional[str] = field(default=None)
    path_params: CreateSipDomainPathParams = field(default=None)
    request: Optional[bytes] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    security: CreateSipDomainSecurity = field(default=None)
    

@dataclass
class CreateSipDomainResponses:
    api_v2010_account_sip_sip_domain: Optional[shared.APIV2010AccountSipSipDomain] = field(default=None)
    

@dataclass
class CreateSipDomainResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreateSipDomainResponses]] = field(default=None)
    status_code: int = field(default=None)
    
