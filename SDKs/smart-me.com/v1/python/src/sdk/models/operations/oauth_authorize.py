from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class OAuthAuthorizeQueryParams:
    client_id: str = field(default=None, metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    client_secret: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'client_secret', 'style': 'form', 'explode': True }})
    redirect_uri: str = field(default=None, metadata={'query_param': { 'field_name': 'redirect_uri', 'style': 'form', 'explode': True }})
    scope: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    state: str = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class OAuthAuthorizeRequest:
    query_params: OAuthAuthorizeQueryParams = field(default=None)
    

@dataclass
class OAuthAuthorizeResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
