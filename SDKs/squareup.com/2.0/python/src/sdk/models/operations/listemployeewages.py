from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ListEmployeeWagesQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    employee_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'employee_id', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class ListEmployeeWagesSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ListEmployeeWagesRequest:
    query_params: ListEmployeeWagesQueryParams = field(default=None)
    security: ListEmployeeWagesSecurity = field(default=None)
    

@dataclass
class ListEmployeeWagesResponse:
    content_type: str = field(default=None)
    list_employee_wages_response: Optional[shared.ListEmployeeWagesResponse] = field(default=None)
    status_code: int = field(default=None)
    
