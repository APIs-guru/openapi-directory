from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTagsTagsWikisPathParams:
    tags: str = field(metadata={'path_param': { 'field_name': 'tags', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsTagsWikisQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagsTagsWikisRequest:
    path_params: GetTagsTagsWikisPathParams = field()
    query_params: GetTagsTagsWikisQueryParams = field()
    

@dataclass
class GetTagsTagsWikisResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
