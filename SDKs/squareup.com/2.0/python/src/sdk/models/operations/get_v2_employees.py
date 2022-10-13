from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetV2EmployeesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    location_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'location_id', 'style': 'form', 'explode': True }})
    status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV2EmployeesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetV2EmployeesRequest:
    query_params: GetV2EmployeesQueryParams = field(default=None)
    security: GetV2EmployeesSecurity = field(default=None)
    

@dataclass
class GetV2EmployeesResponse:
    content_type: str = field(default=None)
    list_employees_response: Optional[shared.ListEmployeesResponse] = field(default=None)
    status_code: int = field(default=None)
    
