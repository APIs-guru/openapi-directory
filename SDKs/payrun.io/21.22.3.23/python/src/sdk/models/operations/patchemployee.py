from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchEmployeePathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchEmployeeHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchEmployeeRequest:
    path_params: PatchEmployeePathParams = field(default=None)
    headers: PatchEmployeeHeaders = field(default=None)
    request: shared.Employee = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchEmployeeResponse:
    content_type: str = field(default=None)
    employee: Optional[shared.Employee] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
