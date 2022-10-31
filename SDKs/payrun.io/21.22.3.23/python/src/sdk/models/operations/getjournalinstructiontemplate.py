from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJournalInstructionTemplatePathParams:
    journal_instruction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JournalInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalInstructionTemplateHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalInstructionTemplateRequest:
    path_params: GetJournalInstructionTemplatePathParams = field(default=None)
    headers: GetJournalInstructionTemplateHeaders = field(default=None)
    

@dataclass
class GetJournalInstructionTemplateResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    journal_instruction: Optional[shared.JournalInstruction] = field(default=None)
    status_code: int = field(default=None)
    
