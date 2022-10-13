from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutJournalInstructionTemplatePathParams:
    journal_instruction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JournalInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutJournalInstructionTemplateHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version' }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization' }})
    

@dataclass
class PutJournalInstructionTemplateRequest:
    path_params: PutJournalInstructionTemplatePathParams = field(default=None)
    headers: PutJournalInstructionTemplateHeaders = field(default=None)
    

@dataclass
class PutJournalInstructionTemplateResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    journal_instruction: Optional[shared.JournalInstruction] = field(default=None)
    status_code: int = field(default=None)
    
