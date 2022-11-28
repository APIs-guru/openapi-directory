from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJournalLineFromEmployerPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    journal_line_id: str = field(metadata={'path_param': { 'field_name': 'JournalLineId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalLineFromEmployerHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalLineFromEmployerRequest:
    headers: GetJournalLineFromEmployerHeaders = field()
    path_params: GetJournalLineFromEmployerPathParams = field()
    

@dataclass
class GetJournalLineFromEmployerResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    journal_line: Optional[shared.JournalLine] = field(default=None)
    
