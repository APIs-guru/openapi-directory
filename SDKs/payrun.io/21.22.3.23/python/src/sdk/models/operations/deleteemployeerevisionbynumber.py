from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteEmployeeRevisionByNumberPathParams:
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    revision_number: str = field(metadata={'path_param': { 'field_name': 'RevisionNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEmployeeRevisionByNumberHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteEmployeeRevisionByNumberRequest:
    headers: DeleteEmployeeRevisionByNumberHeaders = field()
    path_params: DeleteEmployeeRevisionByNumberPathParams = field()
    

@dataclass
class DeleteEmployeeRevisionByNumberResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
