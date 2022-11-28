from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteJournalInstructionTemplatePathParams:
    journal_instruction_id: str = field(metadata={'path_param': { 'field_name': 'JournalInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteJournalInstructionTemplateHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteJournalInstructionTemplateRequest:
    headers: DeleteJournalInstructionTemplateHeaders = field()
    path_params: DeleteJournalInstructionTemplatePathParams = field()
    

@dataclass
class DeleteJournalInstructionTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
