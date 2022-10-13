from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUsersIdsAssociatedPathParams:
    ids: str = field(default=None, metadata={'path_param': { 'field_name': 'ids', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersIdsAssociatedQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersIdsAssociatedRequest:
    path_params: GetUsersIdsAssociatedPathParams = field(default=None)
    query_params: GetUsersIdsAssociatedQueryParams = field(default=None)
    

@dataclass
class GetUsersIdsAssociatedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
