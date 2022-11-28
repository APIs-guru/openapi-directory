from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PostAPIOauthAuthorizeQueryParams:
    client_id: str = field(metadata={'query_param': { 'field_name': 'client_id', 'style': 'form', 'explode': True }})
    redirect_uri: str = field(metadata={'query_param': { 'field_name': 'redirect_uri', 'style': 'form', 'explode': True }})
    state: str = field(metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    client_secret: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'client_secret', 'style': 'form', 'explode': True }})
    scope: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scope', 'style': 'form', 'explode': True }})
    

@dataclass
class PostAPIOauthAuthorizeRequest:
    query_params: PostAPIOauthAuthorizeQueryParams = field()
    

@dataclass
class PostAPIOauthAuthorizeResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    object: Optional[dict[str, Any]] = field(default=None)
    
