from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostCisInstructionIntoSubContractorPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    sub_contractor_id: str = field(default=None, metadata={'path_param': { 'field_name': 'SubContractorId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCisInstructionIntoSubContractorHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostCisInstructionIntoSubContractorRequest:
    path_params: PostCisInstructionIntoSubContractorPathParams = field(default=None)
    headers: PostCisInstructionIntoSubContractorHeaders = field(default=None)
    request: shared.CisInstruction = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostCisInstructionIntoSubContractorResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    status_code: int = field(default=None)
    
