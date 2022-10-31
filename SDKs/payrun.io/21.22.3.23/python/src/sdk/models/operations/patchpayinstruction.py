from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchPayInstructionPathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    pay_instruction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'PayInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchPayInstructionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchPayInstructionRequest:
    path_params: PatchPayInstructionPathParams = field(default=None)
    headers: PatchPayInstructionHeaders = field(default=None)
    request: shared.PayInstruction = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchPayInstructionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    pay_instruction: Optional[shared.PayInstruction] = field(default=None)
    status_code: int = field(default=None)
    
