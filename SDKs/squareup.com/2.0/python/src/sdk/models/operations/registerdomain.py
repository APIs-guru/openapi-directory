from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RegisterDomainSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class RegisterDomainRequest:
    request: shared.RegisterDomainRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: RegisterDomainSecurity = field(default=None)
    

@dataclass
class RegisterDomainResponse:
    content_type: str = field(default=None)
    register_domain_response: Optional[shared.RegisterDomainResponse] = field(default=None)
    status_code: int = field(default=None)
    
