from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostJournalInstructionPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostJournalInstructionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostJournalInstructionRequest:
    headers: PostJournalInstructionHeaders = field()
    path_params: PostJournalInstructionPathParams = field()
    

@dataclass
class PostJournalInstructionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    
