from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetHeatingMarginCoverageDirectionEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"


@dataclass
class GetHeatingMarginCoverageQueryParams:
    application_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'applicationId', 'style': 'form', 'explode': True }})
    covered: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'covered', 'style': 'form', 'explode': True }})
    direction: Optional[GetHeatingMarginCoverageDirectionEnum] = field(default=None, metadata={'query_param': { 'field_name': 'direction', 'style': 'form', 'explode': True }})
    group_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'groupId', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    service_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'serviceId', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHeatingMarginCoverageRequest:
    query_params: GetHeatingMarginCoverageQueryParams = field()
    

@dataclass
class GetHeatingMarginCoverageResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
