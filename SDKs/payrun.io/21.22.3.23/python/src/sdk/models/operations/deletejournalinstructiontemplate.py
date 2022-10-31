from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteJournalInstructionTemplatePathParams:
    journal_instruction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JournalInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteJournalInstructionTemplateHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteJournalInstructionTemplateRequest:
    path_params: DeleteJournalInstructionTemplatePathParams = field(default=None)
    headers: DeleteJournalInstructionTemplateHeaders = field(default=None)
    

@dataclass
class DeleteJournalInstructionTemplateResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    status_code: int = field(default=None)
    
