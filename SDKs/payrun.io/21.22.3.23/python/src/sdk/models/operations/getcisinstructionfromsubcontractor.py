from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCisInstructionFromSubContractorPathParams:
    cis_instruction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'CisInstructionId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCisInstructionFromSubContractorHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class GetCisInstructionFromSubContractorRequest:
    path_params: GetCisInstructionFromSubContractorPathParams = field(default=None)
    headers: GetCisInstructionFromSubContractorHeaders = field(default=None)
    

@dataclass
class GetCisInstructionFromSubContractorResponse:
    cis_instruction: Optional[shared.CisInstruction] = field(default=None)
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
