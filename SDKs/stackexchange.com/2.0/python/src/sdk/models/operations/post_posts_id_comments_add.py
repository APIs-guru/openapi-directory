from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PostPostsIDCommentsAddPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPostsIDCommentsAddQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    body: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'body', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    preview: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'preview', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPostsIDCommentsAddRequest:
    path_params: PostPostsIDCommentsAddPathParams = field()
    query_params: PostPostsIDCommentsAddQueryParams = field()
    

@dataclass
class PostPostsIDCommentsAddResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
