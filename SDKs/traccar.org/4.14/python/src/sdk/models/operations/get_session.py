from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSessionQueryParams:
    token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSessionRequest:
    query_params: GetSessionQueryParams = field(default=None)
    

@dataclass
class GetSessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user: Optional[shared.User] = field(default=None)
    
