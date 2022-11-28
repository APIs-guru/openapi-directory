from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPayInstructionFromEmployeePathParams:
    employee_id: str = field(metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_instruction_id: str = field(metadata={'path_param': { 'field_name': 'PayInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayInstructionFromEmployeeHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPayInstructionFromEmployeeRequest:
    headers: GetPayInstructionFromEmployeeHeaders = field()
    path_params: GetPayInstructionFromEmployeePathParams = field()
    

@dataclass
class GetPayInstructionFromEmployeeResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_instruction: Optional[shared.PayInstruction] = field(default=None)
    
