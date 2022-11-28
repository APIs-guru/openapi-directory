from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetApplicationsDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetApplicationsQueryParams:
    direction: Optional[GetApplicationsDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetApplicationsRequest:
    query_params: GetApplicationsQueryParams = field()
    

@dataclass
class GetApplicationsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
