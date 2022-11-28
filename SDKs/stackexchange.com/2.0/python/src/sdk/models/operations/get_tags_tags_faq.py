from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetTagsTagsFaqPathParams:
    tags: str = field(metadata={'path_param': { 'field_name': 'tags', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTagsTagsFaqQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTagsTagsFaqRequest:
    path_params: GetTagsTagsFaqPathParams = field()
    query_params: GetTagsTagsFaqQueryParams = field()
    

@dataclass
class GetTagsTagsFaqResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
