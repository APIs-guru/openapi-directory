from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeletePayInstructionPathParams:
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_instruction_id: str = field(metadata={'path_param': { 'field_name': 'PayInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePayInstructionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeletePayInstructionRequest:
    headers: DeletePayInstructionHeaders = field()
    path_params: DeletePayInstructionPathParams = field()
    

@dataclass
class DeletePayInstructionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
