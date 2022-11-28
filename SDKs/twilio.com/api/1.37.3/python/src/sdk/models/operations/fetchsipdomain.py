from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


FETCH_SIP_DOMAIN_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class FetchSipDomainPathParams:
    account_sid: str = field(metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchSipDomainSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class FetchSipDomainRequest:
    path_params: FetchSipDomainPathParams = field()
    security: FetchSipDomainSecurity = field()
    server_url: Optional[str] = field(default=None)
    

@dataclass
class FetchSipDomainResponse:
    content_type: str = field()
    status_code: int = field()
    api_v2010_account_sip_sip_domain: Optional[shared.APIV2010AccountSipSipDomain] = field(default=None)
    
