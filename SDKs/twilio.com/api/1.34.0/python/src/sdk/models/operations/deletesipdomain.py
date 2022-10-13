from dataclasses import dataclass, field
from typing import Optional
DELETE_SIP_DOMAIN_SERVERS = [
	"https://api.twilio.com",
]


@dataclass
class DeleteSipDomainPathParams:
    account_sid: str = field(default=None, metadata={'path_param': { 'field_name': 'AccountSid', 'style': 'simple', 'explode': False }})
    sid: str = field(default=None, metadata={'path_param': { 'field_name': 'Sid', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSipDomainSecurity:
    account_sid_auth_token: shared.SchemeAccountSidAuthToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteSipDomainRequest:
    server_url: Optional[str] = field(default=None)
    path_params: DeleteSipDomainPathParams = field(default=None)
    security: DeleteSipDomainSecurity = field(default=None)
    

@dataclass
class DeleteSipDomainResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
