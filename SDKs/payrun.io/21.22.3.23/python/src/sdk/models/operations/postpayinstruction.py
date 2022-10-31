from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPayInstructionPathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployeeId', 'style': 'simple', 'explode': False }})
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPayInstructionHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPayInstructionRequest:
    path_params: PostPayInstructionPathParams = field(default=None)
    headers: PostPayInstructionHeaders = field(default=None)
    request: shared.PayInstruction = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostPayInstructionResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    status_code: int = field(default=None)
    
