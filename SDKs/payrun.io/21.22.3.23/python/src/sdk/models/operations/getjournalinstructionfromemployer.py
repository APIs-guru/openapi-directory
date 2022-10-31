from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJournalInstructionFromEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    journal_instruction_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JournalInstructionId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalInstructionFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalInstructionFromEmployerRequest:
    path_params: GetJournalInstructionFromEmployerPathParams = field(default=None)
    headers: GetJournalInstructionFromEmployerHeaders = field(default=None)
    

@dataclass
class GetJournalInstructionFromEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    journal_instruction: Optional[shared.JournalInstruction] = field(default=None)
    status_code: int = field(default=None)
    
