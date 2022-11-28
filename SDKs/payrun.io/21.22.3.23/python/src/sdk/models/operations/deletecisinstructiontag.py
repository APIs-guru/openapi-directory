from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteCisInstructionTagPathParams:
    cis_instruction_id: str = field(metadata={'path_param': { 'field_name': 'CisInstructionId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCisInstructionTagHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteCisInstructionTagRequest:
    headers: DeleteCisInstructionTagHeaders = field()
    path_params: DeleteCisInstructionTagPathParams = field()
    

@dataclass
class DeleteCisInstructionTagResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
