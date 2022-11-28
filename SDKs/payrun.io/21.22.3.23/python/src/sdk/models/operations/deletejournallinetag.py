from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteJournalLineTagPathParams:
    employer_id: str = field(metadata={'path_param': { 'field_name': 'EmployerId', 'style': 'simple', 'explode': False }})
    journal_line_id: str = field(metadata={'path_param': { 'field_name': 'JournalLineId', 'style': 'simple', 'explode': False }})
    tag_id: str = field(metadata={'path_param': { 'field_name': 'TagId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteJournalLineTagHeaders:
    api_version: str = field(metadata={'header': { 'field_name': 'Api-Version', 'style': 'simple', 'explode': False }})
    authorization: str = field(metadata={'header': { 'field_name': 'Authorization', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteJournalLineTagRequest:
    headers: DeleteJournalLineTagHeaders = field()
    path_params: DeleteJournalLineTagPathParams = field()
    

@dataclass
class DeleteJournalLineTagResponse:
    content_type: str = field()
    status_code: int = field()
    error_model: Optional[shared.ErrorModel] = field(default=None)
    
