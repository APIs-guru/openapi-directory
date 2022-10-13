from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPostsIDCommentsAddPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPostsIDCommentsAddQueryParams:
    body: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'body', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    preview: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'preview', 'style': 'form', 'explode': True }})
    site: str = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPostsIDCommentsAddRequest:
    path_params: PostPostsIDCommentsAddPathParams = field(default=None)
    query_params: PostPostsIDCommentsAddQueryParams = field(default=None)
    

@dataclass
class PostPostsIDCommentsAddResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
