from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUsersIDTopAnswerTagsPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIDTopAnswerTagsQueryParams:
    site: str = field(metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersIDTopAnswerTagsRequest:
    path_params: GetUsersIDTopAnswerTagsPathParams = field()
    query_params: GetUsersIDTopAnswerTagsQueryParams = field()
    

@dataclass
class GetUsersIDTopAnswerTagsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
