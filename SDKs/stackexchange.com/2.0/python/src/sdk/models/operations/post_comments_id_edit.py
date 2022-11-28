from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostCommentsIDEditPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCommentsIDEditQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    body: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'body', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    preview: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'preview', 'style': 'form', 'explode': True }})
    

@dataclass
class PostCommentsIDEditRequest:
    path_params: PostCommentsIDEditPathParams = field()
    query_params: PostCommentsIDEditQueryParams = field()
    

@dataclass
class PostCommentsIDEditResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
