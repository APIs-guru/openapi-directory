from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayLineFromEmployeePathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_line_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayLineId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayLineFromEmployeeHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetPayLineFromEmployeeRequest:
    path_params: GetPayLineFromEmployeePathParams = field(default=None)
    headers: GetPayLineFromEmployeeHeaders = field(default=None)
    

@dataclass
class GetPayLineFromEmployeeResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_line: Optional[shared.PayLine] = field(default=None)
    status_code: int = field(default=None)
    
