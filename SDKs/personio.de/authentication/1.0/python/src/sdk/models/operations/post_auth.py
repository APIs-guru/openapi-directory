from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostAuthQueryParams:
    client_id: str = field(default=None, metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    client_secret: str = field(default=None, metadata={'query_param': { 'field_name': 'client_secret', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAuthRequest:
    query_params: PostAuthQueryParams = field(default=None)
    

@dataclass
class PostAuthResponse:
    authentication_token_response: Optional[shared.AuthenticationTokenResponse] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
