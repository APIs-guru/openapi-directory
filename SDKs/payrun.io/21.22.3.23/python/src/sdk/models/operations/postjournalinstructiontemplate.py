from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostJournalInstructionTemplateHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostJournalInstructionTemplateRequest:
    headers: PostJournalInstructionTemplateHeaders = field()
    

@dataclass
class PostJournalInstructionTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    link: Optional[shared.Link] = field(default=None)
    
