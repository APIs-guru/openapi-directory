from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared
FETCH_SIP_DOMAIN_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSipDomainPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSipDomainSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSipDomainRequest:
    server_url: Optional[str] = field(default=None)
    path_params: FetchSipDomainPathParams = field(default=None)
    security: FetchSipDomainSecurity = field(default=None)
    

@dataclass
class FetchSipDomainResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    api_v2010_account_sip_sip_domain: Optional[shared.APIV2010AccountSipSipDomain] = field(default=None)
    
