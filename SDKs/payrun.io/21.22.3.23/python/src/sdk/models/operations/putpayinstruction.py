from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutPayInstructionPathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_instruction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutPayInstructionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PutPayInstructionRequest:
    path_params: PutPayInstructionPathParams = field(default=None)
    headers: PutPayInstructionHeaders = field(default=None)
    request: shared.PayInstruction = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutPayInstructionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_instruction: Optional[shared.PayInstruction] = field(default=None)
    status_code: int = field(default=None)
    
