from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCisInstructionFromSubContractorPathParams:
    cis_instruction_id: str = field(metadata={'path_param': { 'field_name': 'CisInstructionId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisInstructionFromSubContractorHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisInstructionFromSubContractorRequest:
    headers: GetCisInstructionFromSubContractorHeaders = field()
    path_params: GetCisInstructionFromSubContractorPathParams = field()
    

@dataclass
class GetCisInstructionFromSubContractorResponse:
    content_type: str = field()
    status_code: int = field()
    cis_instruction: Optional[shared.CisInstruction] = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
