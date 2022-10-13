from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetMeCommentsToIDPathParams:
    to_id: int = field(default=None, metadata={'path_param': { 'field_name': 'toId', 'style': 'simple', 'explode': False }})
    
class GetMeCommentsToIDOrderEnum(str, Enum):
    DESC = "desc"
    ASC = "asc"

class GetMeCommentsToIDSortEnum(str, Enum):
    CREATION = "creation"
    VOTES = "votes"


@dataclass
class GetMeCommentsToIDQueryParams:
    callback: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'callback', 'style': 'form', 'explode': True }})
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    fromdate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    max: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'min', 'style': 'form', 'explode': True }})
    order: Optional[GetMeCommentsToIDOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'order', 'style': 'form', 'explode': True }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    site: str = field(default=None, metadata={'query_param': { 'field_name': 'site', 'style': 'form', 'explode': True }})
    sort: Optional[GetMeCommentsToIDSortEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    todate: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMeCommentsToIDRequest:
    path_params: GetMeCommentsToIDPathParams = field(default=None)
    query_params: GetMeCommentsToIDQueryParams = field(default=None)
    

@dataclass
class GetMeCommentsToIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
