from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchCisInstructionPathParams:
    cis_instruction_id: str = field(metadata={'path_param': { 'field_name': 'CisInstructionId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchCisInstructionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchCisInstructionRequest:
    headers: PatchCisInstructionHeaders = field()
    path_params: PatchCisInstructionPathParams = field()
    

@dataclass
class PatchCisInstructionResponse:
    content_type: str = field()
    status_code: int = field()
    cis_instruction: Optional[shared.CisInstruction] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
