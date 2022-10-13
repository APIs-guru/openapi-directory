from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAccessTokensAccessTokensInvalidatePathParams:
    access_tokens: str = field(default=None, metadata={'path_param': { 'field_name': 'accessTokens', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccessTokensAccessTokensInvalidateQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccessTokensAccessTokensInvalidateRequest:
    path_params: GetAccessTokensAccessTokensInvalidatePathParams = field(default=None)
    query_params: GetAccessTokensAccessTokensInvalidateQueryParams = field(default=None)
    

@dataclass
class GetAccessTokensAccessTokensInvalidateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
