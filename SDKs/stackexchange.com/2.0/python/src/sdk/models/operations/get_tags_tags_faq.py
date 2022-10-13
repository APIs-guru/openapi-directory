from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTagsTagsFaqPathParams:
    tags: str = field(default=None, metadata={'path_param': { 'field_name': 'tags', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsTagsFaqQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    site: str = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagsTagsFaqRequest:
    path_params: GetTagsTagsFaqPathParams = field(default=None)
    query_params: GetTagsTagsFaqQueryParams = field(default=None)
    

@dataclass
class GetTagsTagsFaqResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
