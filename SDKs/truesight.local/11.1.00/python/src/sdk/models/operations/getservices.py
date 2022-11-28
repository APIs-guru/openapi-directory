from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetServicesDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetServicesQueryParams:
    direction: Optional[GetServicesDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServicesRequest:
    query_params: GetServicesQueryParams = field()
    

@dataclass
class GetServicesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
