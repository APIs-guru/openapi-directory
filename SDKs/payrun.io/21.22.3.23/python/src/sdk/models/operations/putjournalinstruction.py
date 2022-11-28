from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutJournalInstructionPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    journal_instruction_id: str = field(metadata={'path_param': { 'field_name': 'JournalInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutJournalInstructionHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutJournalInstructionRequest:
    headers: PutJournalInstructionHeaders = field()
    path_params: PutJournalInstructionPathParams = field()
    

@dataclass
class PutJournalInstructionResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    journal_instruction: Optional[shared.JournalInstruction] = field(default=None)
    
