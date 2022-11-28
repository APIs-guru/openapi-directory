from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEmployeeRevisionByNumberPathParams:
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployeeRevisionByNumberHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetEmployeeRevisionByNumberRequest:
    headers: GetEmployeeRevisionByNumberHeaders = field()
    path_params: GetEmployeeRevisionByNumberPathParams = field()
    

@dataclass
class GetEmployeeRevisionByNumberResponse:
    content_type: str = field()
    status_code: int = field()
    employee: Optional[shared.Employee] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
