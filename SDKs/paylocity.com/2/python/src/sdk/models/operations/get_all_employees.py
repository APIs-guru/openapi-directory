from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetAllEmployeesPathParams:
    company_id: str = field(metadata={'path_param': { 'field_name': 'companyId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAllEmployeesQueryParams:
    includetotalcount: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includetotalcount', 'style': 'form', 'explode': True }})
    pagenumber: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagenumber', 'style': 'form', 'explode': True }})
    pagesize: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pagesize', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAllEmployeesSecurity:
    paylocity_auth: shared.SchemePaylocityAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetAllEmployeesRequest:
    path_params: GetAllEmployeesPathParams = field()
    query_params: GetAllEmployeesQueryParams = field()
    security: GetAllEmployeesSecurity = field()
    

@dataclass
class GetAllEmployeesResponse:
    content_type: str = field()
    status_code: int = field()
    employee_infos: Optional[List[shared.EmployeeInfo]] = field(default=None)
    errors: Optional[List[shared.Error]] = field(default=None)
    
