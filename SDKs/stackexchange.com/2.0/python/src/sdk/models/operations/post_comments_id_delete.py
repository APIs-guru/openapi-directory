from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostCommentsIDDeletePathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCommentsIDDeleteQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    preview: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'preview', 'style': 'form', 'explode': True }})
    site: str = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCommentsIDDeleteRequest:
    path_params: PostCommentsIDDeletePathParams = field(default=None)
    query_params: PostCommentsIDDeleteQueryParams = field(default=None)
    

@dataclass
class PostCommentsIDDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
