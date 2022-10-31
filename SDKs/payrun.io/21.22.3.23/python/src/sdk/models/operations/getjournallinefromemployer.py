from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetJournalLineFromEmployerPathParams:
    employer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    journal_line_id: str = field(default=None, metadata={'path_param': { 'field_name': 'JournalLineId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalLineFromEmployerHeaders:
    api_version: str = field(default=None, metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(default=None, metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetJournalLineFromEmployerRequest:
    path_params: GetJournalLineFromEmployerPathParams = field(default=None)
    headers: GetJournalLineFromEmployerHeaders = field(default=None)
    

@dataclass
class GetJournalLineFromEmployerResponse:
    content_type: str = field(default=None)
    error_model: Optional[shared.ErrorModel] = field(default=None)
    journal_line: Optional[shared.JournalLine] = field(default=None)
    status_code: int = field(default=None)
    
