from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class VeloAuthQueryParams:
    grant_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'grant_type', 'style': 'form', 'explode': True }})
    

@dataclass
class VeloAuthSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class VeloAuthRequest:
    query_params: VeloAuthQueryParams = field(default=None)
    security: VeloAuthSecurity = field(default=None)
    

@dataclass
class VeloAuthResponse:
    auth_response: Optional[shared.AuthResponse] = field(default=None)
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
