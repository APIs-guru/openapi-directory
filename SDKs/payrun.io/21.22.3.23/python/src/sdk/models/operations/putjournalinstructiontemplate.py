from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutJournalInstructionTemplatePathParams:
    journal_instruction_id: str = field(metadata={'path_param': { 'field_name': 'JournalInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutJournalInstructionTemplateHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutJournalInstructionTemplateRequest:
    headers: PutJournalInstructionTemplateHeaders = field()
    path_params: PutJournalInstructionTemplatePathParams = field()
    

@dataclass
class PutJournalInstructionTemplateResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    journal_instruction: Optional[shared.JournalInstruction] = field(default=None)
    
