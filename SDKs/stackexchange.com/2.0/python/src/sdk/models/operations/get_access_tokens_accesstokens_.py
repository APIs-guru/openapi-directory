from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAccessTokensAccessTokensPathParams:
    access_tokens: str = field(default=None, metadata={'path_param': { 'field_name': 'accessTokens', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccessTokensAccessTokensQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccessTokensAccessTokensRequest:
    path_params: GetAccessTokensAccessTokensPathParams = field(default=None)
    query_params: GetAccessTokensAccessTokensQueryParams = field(default=None)
    

@dataclass
class GetAccessTokensAccessTokensResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
