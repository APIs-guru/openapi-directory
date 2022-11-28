from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class VeloAuthQueryParams:
    grant_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'grant_type', 'style': 'form', 'explode': True }})
    

@dataclass
class VeloAuthSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class VeloAuthRequest:
    query_params: VeloAuthQueryParams = field()
    security: VeloAuthSecurity = field()
    

@dataclass
class VeloAuthResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    auth_response: Optional[shared.AuthResponse] = field(default=None)
    
