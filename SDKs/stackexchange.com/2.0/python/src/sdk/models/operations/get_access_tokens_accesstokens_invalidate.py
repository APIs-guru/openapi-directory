from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class GetAccessTokensAccessTokensInvalidatePathParams:
    access_tokens: str = field(metadata={'path_param': { 'field_name': 'accessTokens', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAccessTokensAccessTokensInvalidateQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAccessTokensAccessTokensInvalidateRequest:
    path_params: GetAccessTokensAccessTokensInvalidatePathParams = field()
    query_params: GetAccessTokensAccessTokensInvalidateQueryParams = field()
    

@dataclass
class GetAccessTokensAccessTokensInvalidateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
